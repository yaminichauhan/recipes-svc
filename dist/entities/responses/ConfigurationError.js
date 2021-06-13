"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
class ConfigurationError {
    constructor(data = null, message = 'API Configuration Error') {
        this.data = data;
        this.metadata = {
            code: constants_1.StatusCodes.CONFLICT,
            message,
            timestamp: new Date()
        };
    }
}
exports.default = ConfigurationError;
//# sourceMappingURL=ConfigurationError.js.map