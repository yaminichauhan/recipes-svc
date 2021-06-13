
import RecipeRepository from "../../repositories/recipe/RecipeRepository";
import { sliceData } from '../../libs/utilities';
import IListOutput from './entities/IListOutput';
import { convertToRecipesOutput } from './helper';
import IRecipeModel from "../../repositories/recipe/IRecipeModel";
import UnprocessableError from '../../entities/errors/UnprocessableError';

/**
 * @description class to handle all the jobs related to recipes
 */
class RecipeController {
  private recipeRepository: RecipeRepository;

  constructor() {
    this.recipeRepository = new RecipeRepository();
  }

  /**
   * @description Displays list of applications
   * @param param0 query: To limit the number of records to be fetched and skip any number of documents
   * @param param1 body: Includes those filters based on which the documents are to be filtered
   */
  public async list({ query, body }): Promise<IListOutput[]> {
    console.log("Recipes - List:", JSON.stringify(query), JSON.stringify(body));

    try {
      const { limit = "-1", skip = "0" } = query;
      let recipes: IListOutput[] = await this.recipeRepository.list({});
      recipes = sliceData(recipes, { limit: Number(limit), skip: Number(skip) }).map(convertToRecipesOutput);
      return recipes;
    } catch (err) {
      console.log('Error in Recipe controller List :::::::', err);
      throw err;
    }
  }

  public async create({ body }): Promise<IRecipeModel> {
    console.log("Recipes - Add:", JSON.stringify(body));

    try {
      const { category, description, name, imageUrl, instructions, likes, username } = body;
      let recipe: any = await this.recipeRepository.create({ category, description, name, imageUrl, instructions, likes, username });
      recipe = convertToRecipesOutput(recipe);
      return recipe;
    } catch (err) {
      if(err.errmsg.includes('E11000 duplicate key error collection')) {
        throw new UnprocessableError([{
          location: "Recipe controller Add",
          msg: "Mongo Duplicacy error",
          param: "category, name, deletedAt must be unique",
          value: ""
        }]);
      }
      throw err;
    }
  }

  public async update({ body }): Promise<IRecipeModel> {
    console.log("Recipes - Add:", JSON.stringify(body));

    try {
      const { likes, originalId } = body;
      let recipe: any = await this.recipeRepository.update({ likes, originalId });
      recipe = convertToRecipesOutput(recipe);
      return recipe;
    } catch (err) {
      throw err;
    }
  }

  /**
   * @description Returns list of recipes
   * @param param0 query: To limit the number of records to be fetched and skip any number of documents
   * @param param1 body: Includes those filters based on which the documents are to be filtered
   */
  public async search({ query, body }): Promise<IListOutput[]> {
    console.log("RecipeController - Search:", JSON.stringify(body));
    return this.list({ query, body });
  }
}

export default new RecipeController();
