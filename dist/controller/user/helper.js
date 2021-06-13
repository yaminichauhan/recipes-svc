"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertToUserOutput(user) {
    return {
        email: user.email,
        password: user.password,
        username: user.username,
        favorites: user.favorites
    };
}
exports.convertToUserOutput = convertToUserOutput;
//# sourceMappingURL=helper.js.map