"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = require("../BaseRepository");
const utilities_1 = require("../../libs/utilities");
const utilities_2 = require("../../libs/utilities");
class VersioningRepository extends BaseRepository_1.default {
    constructor(modelType) {
        super(modelType);
    }
    /**
     * Create new application
     * @property {string} body.name - The name of record.
     * @returns {Application}
     */
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - Create:", JSON.stringify(options));
            const id = options.id ? options.id : utilities_1.generateObjectId();
            const model = new this.modelType(Object.assign(Object.assign({}, options), { _id: id, originalId: id }));
            console.log("model................model........", model);
            return yield model.save();
        });
    }
    /**
     * Insert Many
     * @returns {Documents[]}
     */
    insertMany(docs, options) {
        const _super = Object.create(null, {
            insertMany: { get: () => super.insertMany }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - insertMany");
            const docsToInsert = docs.map(item => {
                const id = item.id ? item.id : utilities_1.generateObjectId();
                return Object.assign(Object.assign({}, item), { _id: id, originalId: id });
            });
            return yield _super.insertMany.call(this, docsToInsert, options);
        });
    }
    updateMany(docs, options) {
        const _super = Object.create(null, {
            insertMany: { get: () => super.insertMany }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - updateMany");
            const docsToUpdate = [];
            for (const item of docs) {
                yield this.invalidate(item.originalId);
                const newInstance = Object.assign({}, item, options);
                newInstance["_id"] = utilities_1.generateObjectId();
                delete newInstance.createdAt;
                docsToUpdate.push(newInstance);
            }
            return yield _super.insertMany.call(this, docsToUpdate, options);
        });
    }
    /**
     * Create new application
     * @property {string} id - Record unique identifier.
     * @returns {Application}
     */
    update(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - Update:", JSON.stringify(options));
            console.log("Searching for previous valid object...");
            const previous = yield this.getById(options.originalId);
            console.log("Invalidating previous valid object...");
            yield this.invalidate(options.originalId);
            const newInstance = Object.assign({}, previous, options);
            newInstance["_id"] = utilities_1.generateObjectId();
            delete previous.deletedAt;
            const model = new this.modelType(newInstance);
            console.log("Creating new object...");
            return yield model.save();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - Delete:", id);
            console.log("Searching for previous valid object...");
            const previous = yield this.getById(id);
            console.log("Invalidating previous valid object...");
            yield this.invalidate(id);
            const newId = utilities_1.generateObjectId();
            const newInstance = Object.assign({}, previous, { _id: newId, isSoftDeleted: true });
            const model = new this.modelType(newInstance);
            return yield model.save();
        });
    }
    getAll(conditions, projection, options, populate) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - getAll:", JSON.stringify(conditions));
            const updatedQuery = Object.assign({ deletedAt: null }, conditions);
            return yield _super.getAll.call(this, updatedQuery, projection, options, populate);
        });
    }
    getById(id, populate) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - getById", id, populate);
            return yield _super.findOne.call(this, { originalId: id, deletedAt: null }, populate);
        });
    }
    getByQuery(query) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return __awaiter(this, void 0, void 0, function* () {
            query.deletedAt = null;
            return yield _super.findOne.call(this, query);
        });
    }
    getByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - getByIds", ids);
            return yield this.getAll({ originalId: { $in: ids } });
        });
    }
    count(conditions) {
        const _super = Object.create(null, {
            count: { get: () => super.count }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("VersioningRepository - Count:", JSON.stringify(conditions));
            const updatedQuery = Object.assign({ deletedAt: null }, conditions);
            return yield _super.count.call(this, updatedQuery);
        });
    }
    invalidate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            return yield utilities_2.lean(this.modelType.updateMany({ originalId: id, deletedAt: null }, { deletedAt: now }));
        });
    }
}
exports.default = VersioningRepository;
//# sourceMappingURL=VersioningRepository.js.map