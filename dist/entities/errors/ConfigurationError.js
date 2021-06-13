"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = require("./APIError");
const constants_1 = require("../../libs/constants");
class ConfigurationError extends APIError_1.default {
    constructor(error) {
        super('Configuration Error', constants_1.StatusCodes.CONFLICT, error);
    }
}
exports.default = ConfigurationError;
//# sourceMappingURL=ConfigurationError.js.map