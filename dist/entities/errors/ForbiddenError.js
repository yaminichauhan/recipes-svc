"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = require("./APIError");
const constants_1 = require("../../libs/constants");
class ForbiddenError extends APIError_1.default {
    constructor(errors) {
        super(errors[0] ? errors[0].msg : "Forbidden", constants_1.StatusCodes.FORBIDDEN, errors, ForbiddenError.name);
    }
}
exports.default = ForbiddenError;
//# sourceMappingURL=ForbiddenError.js.map