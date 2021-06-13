"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../versionable/VersionableSchema");
class RecipeSchema extends VersionableSchema_1.default {
    constructor(options, collections) {
        const schema = Object.assign(Object.assign({}, options), { category: {
                type: String
            }, description: {
                type: String
            }, name: {
                type: String
            }, imageUrl: {
                type: String
            }, instructions: {
                type: Object,
                heading: {
                    type: String,
                },
                process1: {
                    type: String
                },
                process2: {
                    type: String
                },
                conclusion: {
                    type: String
                }
            }, createdDate: {
                type: Date,
                default: Date.now
            }, likes: {
                type: Number,
                default: 0
            }, username: {
                type: String
            } });
        super(schema, collections);
    }
}
exports.default = RecipeSchema;
;
//# sourceMappingURL=RecipeSchema.js.map