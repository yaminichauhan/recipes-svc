import { Model } from "mongoose";

import { userModel } from "./userModel";
import IUserModel from "./IUserModel";
import { IQueryList } from "./entities";
import VersioningRepository from "../versionable/VersioningRepository";

export default class UserRepository extends VersioningRepository<IUserModel, Model<IUserModel>> {

  private static instance: UserRepository;

  constructor() {
    super(userModel);
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }

  /**
   * To get list of all Users
   * @param query object containing limit and skip for querying the data
   * @returns Promise
   */
  public async list(query: IQueryList): Promise<IUserModel[]> {
    console.log("UserRepository - List:", JSON.stringify(query));

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
    console.log("UserRepository - updateMany:");
    return await super.insertMany(data);
  }

  public async getData(query: IQueryList): Promise<IUserModel[]> {
    console.log("UserRepository - List:", JSON.stringify(query));
    return await this.list(query);
  }
}
