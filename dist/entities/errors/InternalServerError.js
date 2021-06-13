"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = require("./APIError");
const constants_1 = require("../../libs/constants");
class InternalServerError extends APIError_1.default {
    constructor(errors) {
        super('Internal Server Error', constants_1.StatusCodes.INTERNAL_SERVER_ERROR, errors);
    }
}
exports.default = InternalServerError;
//# sourceMappingURL=InternalServerError.js.map