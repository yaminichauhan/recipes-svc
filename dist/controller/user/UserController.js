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
const UserRepository_1 = require("../../repositories/User/UserRepository");
const utilities_1 = require("../../libs/utilities");
const helper_1 = require("./helper");
/**
 * @description class to handle all the jobs related to recipes
 */
class UserController {
    constructor() {
        this.userRepository = new UserRepository_1.default();
    }
    /**
     * @description Displays list of applications
     * @param param0 query: To limit the number of records to be fetched and skip any number of documents
     * @param param1 body: Includes those filters based on which the documents are to be filtered
     */
    list({ query, body }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Users - List:", JSON.stringify(query), JSON.stringify(body));
            try {
                const { limit = "-1", skip = "0" } = query;
                let users = yield this.userRepository.list({});
                users = utilities_1.sliceData(users, { limit: Number(limit), skip: Number(skip) }).map(helper_1.convertToUserOutput);
                return users;
            }
            catch (err) {
                console.log('Error in Users controller List :::::::', err);
                throw err;
            }
        });
    }
    create({ body }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Users - Add:", JSON.stringify(body));
            try {
                const { email, password, username } = body;
                let user = yield this.userRepository.create({ email, password, username });
                user = helper_1.convertToUserOutput(user);
                return user;
            }
            catch (err) {
                console.log('Error in User Controller Add :::::::', err);
                throw err;
            }
        });
    }
    /**
     * @description Returns list of users
     * @param param0 query: To limit the number of records to be fetched and skip any number of documents
     * @param param1 body: Includes those filters based on which the documents are to be filtered
     */
    search({ query, body }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("UserController - Search:", JSON.stringify(body));
            return this.list({ query, body });
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map