"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertToRecipesOutput(recipe) {
    return {
        category: recipe.category,
        description: recipe.description,
        name: recipe.name,
        imageUrl: recipe.imageUrl,
        instructions: recipe.instructions,
        likes: recipe.likes,
        username: recipe.username,
        createdAt: recipe.createdAt,
        originalId: recipe.originalId
    };
}
exports.convertToRecipesOutput = convertToRecipesOutput;
//# sourceMappingURL=helper.js.map