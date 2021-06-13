import { IListOutput } from "./entities";

export function convertToRecipesOutput(recipe): IListOutput {
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
