import * as mongoose from "mongoose";

import IRecipeModel from "./IRecipeModel";
import RecipeSchema from "./RecipeSchema";

/**
 * Recipe Schema
 */
const recipeSchema = new RecipeSchema(
  {
    _id: String
  },
  {
    collection: "Recipes",
    versionKey: false
  }
);

/**
 * indexes
 */
// recipeSchema.index({ name: 1 }, { collation: { locale: "en", strength: 2 } });
recipeSchema.index({ deletedAt: 1, name: 1, category: 1 }, { unique: true });

/**
 * @typedef Recipe
 */
export const recipeModel: mongoose.Model<IRecipeModel> = mongoose.model<IRecipeModel>("Recipe", recipeSchema);
