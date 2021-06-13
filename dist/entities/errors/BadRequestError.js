"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = require("./APIError");
const constants_1 = require("../../libs/constants");
class BadRequestError extends APIError_1.default {
    constructor(errors) {
        super(errors[0] ? errors[0].msg : "Bad Request", constants_1.StatusCodes.BAD_REQUEST, errors, BadRequestError.name);
    }
}
exports.default = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map