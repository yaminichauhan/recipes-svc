"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../libs/constants");
const utilities_1 = require("../../libs/utilities");
class ForbiddenResponse {
    constructor(message = utilities_1.getEnumKeyOrValue(constants_1.StatusCodes, constants_1.StatusCodes.FORBIDDEN)) {
        this.data = null;
        this.metadata = {
            code: constants_1.StatusCodes.FORBIDDEN,
            message,
            timestamp: new Date()
        };
    }
}
exports.default = ForbiddenResponse;
//# sourceMappingURL=ForbiddenResponse.js.map