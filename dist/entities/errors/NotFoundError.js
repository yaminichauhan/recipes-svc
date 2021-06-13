"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = require("./APIError");
const constants_1 = require("../../libs/constants");
class NotFoundError extends APIError_1.default {
    constructor(errors) {
        super('Page Not found', constants_1.StatusCodes.NOT_FOUND, errors, NotFoundError.name);
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map