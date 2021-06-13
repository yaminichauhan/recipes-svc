"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const BaseError_1 = require("./BaseError");
/**
 * Class representing an API error.
 * @extends BaseError
 */
class DBError extends BaseError_1.default {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {IError[]} data - error details.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message, data = [], type = DBError.name) {
        super(message, constants_1.StatusCodes.INTERNAL_SERVER_ERROR, data, type, false);
    }
}
exports.default = DBError;
//# sourceMappingURL=DBError.js.map