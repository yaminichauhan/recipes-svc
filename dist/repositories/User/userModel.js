"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema_1 = require("./UserSchema");
/**
 * User Schema
 */
const userSchema = new UserSchema_1.default({
    _id: String
}, {
    collection: "Users",
    versionKey: false
});
/**
 * indexes
 */
// userSchema.index({ name: 1 }, { collation: { locale: "en", strength: 2 } });
// userSchema.index({ originalId: 1, deletedAt: 1, code: 1 }, { unique: true });
/**
 * @typedef User
 */
exports.userModel = mongoose.model("User", userSchema);
//# sourceMappingURL=userModel.js.map