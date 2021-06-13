"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
class StrapiErrorResponse {
    constructor(message = '', code) {
        this.data = null;
        this.metadata = {
            code: code || constants_1.StatusCodes.FORBIDDEN,
            message,
            timestamp: new Date()
        };
    }
}
exports.default = StrapiErrorResponse;
//# sourceMappingURL=StrapiErrorResponse.js.map