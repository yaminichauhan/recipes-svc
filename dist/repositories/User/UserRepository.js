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
const userModel_1 = require("./userModel");
const VersioningRepository_1 = require("../versionable/VersioningRepository");
class UserRepository extends VersioningRepository_1.default {
    constructor() {
        super(userModel_1.userModel);
    }
    static getInstance() {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }
    /**
     * To get list of all Users
     * @param query object containing limit and skip for querying the data
     * @returns Promise
     */
    list(query) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("UserRepository - List:", JSON.stringify(query));
            const { skip, limit, sort } = query;
            const options = Object.assign(Object.assign(Object.assign({}, (skip && { skip })), (limit && { limit })), { sort: sort || {
                    name: 1
                }, collation: {
                    locale: "en",
                    strength: 2
                } });
            return yield _super.getAll.call(this, {}, null, options);
        });
    }
    insertMany(data) {
        const _super = Object.create(null, {
            insertMany: { get: () => super.insertMany }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("UserRepository - updateMany:");
            return yield _super.insertMany.call(this, data);
        });
    }
    getData(query) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("UserRepository - List:", JSON.stringify(query));
            return yield this.list(query);
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map