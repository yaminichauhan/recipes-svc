"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const RecipeSchema_1 = require("./RecipeSchema");
/**
 * Recipe Schema
 */
const recipeSchema = new RecipeSchema_1.default({
    _id: String
}, {
    collection: "Recipes",
    versionKey: false
});
/**
 * indexes
 */
// recipeSchema.index({ name: 1 }, { collation: { locale: "en", strength: 2 } });
recipeSchema.index({ deletedAt: 1, name: 1, category: 1 }, { unique: true });
/**
 * @typedef Recipe
 */
exports.recipeModel = mongoose.model("Recipe", recipeSchema);
//# sourceMappingURL=recipeModel.js.map