import { Model } from "mongoose";

import { recipeModel } from "./recipeModel";
import IRecipeModel from "./IRecipeModel";
import { IQueryList } from "./entities";
import VersioningRepository from "../versionable/VersioningRepository";

export default class RecipeRepository extends VersioningRepository<IRecipeModel, Model<IRecipeModel>> {

  private static instance: RecipeRepository;

  constructor() {
    super(recipeModel);
  }

  public static getInstance(): RecipeRepository {
    if (!RecipeRepository.instance) {
      RecipeRepository.instance = new RecipeRepository();
    }
    return RecipeRepository.instance;
  }

  /**
   * To get list of all Recipes
   * @param query object containing limit and skip for querying the data
   * @returns Promise
   */
  public async list(query: IQueryList): Promise<IRecipeModel[]> {
    console.log("RecipeRepository - List:", JSON.stringify(query));

    const { skip, limit, sort } = query;

    const options = {
      ...(skip && { skip }),
      ...(limit && { limit }),
      sort: sort || {
        name: 1
      },
      collation: {
        locale: "en",
        strength: 2
      }
    };

    return await super.getAll({}, null, options);
  }

  public async insertMany(data: any[]) {
    console.log("RecipeRepository - updateMany:");
    return await super.insertMany(data);
  }

  public async getData(query: IQueryList): Promise<IRecipeModel[]> {
    console.log("RecipeRepository - List:", JSON.stringify(query));
    return await this.list(query);
  }

  public async updateData(options: any): Promise<IRecipeModel> {
    console.log("RecipeRepository - List:", JSON.stringify(options));
    return await this.update(options);
  }
}
