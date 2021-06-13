"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeRepository_1 = require("../../repositories/recipe/RecipeRepository");
const utilities_1 = require("../../libs/utilities");
const helper_1 = require("./helper");
const UnprocessableError_1 = require("../../entities/errors/UnprocessableError");
/**
 * @description class to handle all the jobs related to recipes
 */
class RecipeController {
    constructor() {
        this.recipeRepository = new RecipeRepository_1.default();
    }
    /**
     * @description Displays list of applications
     * @param param0 query: To limit the number of records to be fetched and skip any number of documents
     * @param param1 body: Includes those filters based on which the documents are to be filtered
     */
    list({ query, body }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Recipes - List:", JSON.stringify(query), JSON.stringify(body));
            try {
                const { limit = "-1", skip = "0" } = query;
                let recipes = yield this.recipeRepository.list({});
                recipes = utilities_1.sliceData(recipes, { limit: Number(limit), skip: Number(skip) }).map(helper_1.convertToRecipesOutput);
                return recipes;
            }
            catch (err) {
                console.log('Error in Recipe controller List :::::::', err);
                throw err;
            }
        });
    }
    create({ body }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Recipes - Add:", JSON.stringify(body));
            try {
                const { category, description, name, imageUrl, instructions, likes, username } = body;
                let recipe = yield this.recipeRepository.create({ category, description, name, imageUrl, instructions, likes, username });
                recipe = helper_1.convertToRecipesOutput(recipe);
                return recipe;
            }
            catch (err) {
                if (err.errmsg.includes('E11000 duplicate key error collection')) {
                    throw new UnprocessableError_1.default([{
                            location: "Recipe controller Add",
                            msg: "Mongo Duplicacy error",
                            param: "category, name, deletedAt must be unique",
                            value: ""
                        }]);
                }
                throw err;
            }
        });
    }
    update({ body }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Recipes - Add:", JSON.stringify(body));
            try {
                const { likes, originalId } = body;
                let recipe = yield this.recipeRepository.update({ likes, originalId });
                recipe = helper_1.convertToRecipesOutput(recipe);
                return recipe;
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @description Returns list of recipes
     * @param param0 query: To limit the number of records to be fetched and skip any number of documents
     * @param param1 body: Includes those filters based on which the documents are to be filtered
     */
    search({ query, body }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("RecipeController - Search:", JSON.stringify(body));
            return this.list({ query, body });
        });
    }
}
exports.default = new RecipeController();
//# sourceMappingURL=RecipeController.js.map