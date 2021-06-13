"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class VersionableSchema extends mongoose_1.Schema {
    constructor(options, collections) {
        const versionedOptions = Object.assign({
            originalId: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                required: true,
                default: Date.now
            },
            deletedAt: {
                type: Date,
                default: null
            }
        }, options);
        super(versionedOptions, collections);
    }
}
exports.default = VersionableSchema;
//# sourceMappingURL=VersionableSchema.js.map