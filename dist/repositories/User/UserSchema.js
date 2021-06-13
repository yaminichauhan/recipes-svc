"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../versionable/VersionableSchema");
const mongoose_1 = require("mongoose");
class UserSchema extends VersionableSchema_1.default {
    constructor(options, collections) {
        const schema = Object.assign(Object.assign({}, options), { username: {
                type: String
            }, email: {
                type: String
            }, password: {
                type: String,
            }, favorites: {
                type: [mongoose_1.Schema.Types.ObjectId],
                ref: 'Recipes'
            } });
        super(schema, collections);
    }
}
exports.default = UserSchema;
;
//# sourceMappingURL=UserSchema.js.map