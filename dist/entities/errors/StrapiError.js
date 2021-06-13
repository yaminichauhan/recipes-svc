"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
const constants_1 = require("../../libs/constants");
class StrapiError extends BaseError_1.default {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message, data = [], status = constants_1.StatusCodes.FORBIDDEN, type = "StrapiError", isPublic = true) {
        super(message, status, data, type, isPublic);
    }
}
exports.default = StrapiError;
//# sourceMappingURL=StrapiError.js.map