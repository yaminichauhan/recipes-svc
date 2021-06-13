"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = require("./APIError");
const constants_1 = require("../../libs/constants");
class UnauthorizedError extends APIError_1.default {
    constructor(errors) {
        super('Authorization Error', constants_1.StatusCodes.UNAUTHORIZED, errors, UnauthorizedError.name);
    }
}
exports.default = UnauthorizedError;
//# sourceMappingURL=UnauthorizedError.js.map