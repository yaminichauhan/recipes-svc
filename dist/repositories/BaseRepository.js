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
const utilities_1 = require("../libs/utilities");
class BaseRepository {
    constructor(modelType) {
        this.modelType = modelType;
    }
    // /**
    //  * Get application list.
    //  * @property {number} skip - Number of records to be skipped.
    //  * @property {number} limit - Limit number of records to be returned.
    //  * @returns {Application[]}
    //  */
    // public async list(query: IQueryBaseList): Promise<D[]> {
    //   console.log("BaseRepository - List");
    //   const { limit, skip, ...conditions } = query;
    //   return this.getAll(conditions, null, { limit, skip, sort: { createdAt: -1 } });
    // }
    // /**
    //  * Get.
    //  * @property {string} id - _id of the record
    //  * @returns {D}
    //  */
    // public async get(options: IQueryBaseGet): Promise<Nullable<D>> {
    //   console.log("BaseRepository - Get");
    //   return this.getById(options.id);
    // }
    /**
     * Create
     * @property {string} body.name - The name of record.
     * @returns {D}
     */
    // public async create(options: IQueryBaseCreate): Promise<D> {
    //   console.log("BaseRepository - Create");
    //   const id = generateObjectId();
    //   const model = new this.modelType({
    //     ...options,
    //     _id: id
    //   });
    //   return model.save();
    // }
    /**
     * Insert Many
     * @returns {Documents[]}
     */
    insertMany(docs, options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("BaseRepository - insertMany");
            return yield this.modelType.insertMany(docs, options);
        });
    }
    count(conditions = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelType.count(conditions);
        });
    }
    getAll(conditions, projection, options, populate) {
        return __awaiter(this, void 0, void 0, function* () {
            return populate
                ? (yield this.modelType
                    .find(conditions, projection, options)
                    .populate(populate)
                    .lean()).map(utilities_1.leanObject)
                : (yield this.modelType.find(conditions, projection, options).lean()).map(utilities_1.leanObject);
        });
    }
    // protected getById(id: string): Promise<Nullable<D>> {
    //   return lean(this.modelType.findById(id));
    // }
    // protected getByIds(ids: string[]): Promise<D[]> {
    //   return this.getAll({ _id: { $in: ids } });
    // }
    findOne(conditions, populate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield populate) ? utilities_1.lean(this.modelType.findOne(conditions).populate(populate)) : utilities_1.lean(this.modelType.findOne(conditions));
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelType.deleteMany({});
        });
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map