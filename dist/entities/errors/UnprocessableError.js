"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = require("./APIError");
const constants_1 = require("../../libs/constants");
class UnprocessableError extends APIError_1.default {
    constructor(errors) {
        super('Validation Error', constants_1.StatusCodes.UNPROCESSABLE, errors, UnprocessableError.name);
    }
}
exports.default = UnprocessableError;
//# sourceMappingURL=UnprocessableError.js.map