
import UserRepository from "../../repositories/User/UserRepository";
import { sliceData } from '../../libs/utilities';
import IListOutput from './entities/IListOutput';
import { convertToUserOutput } from './helper';
import IUserModel from "../../repositories/User/IUserModel";

/**
 * @description class to handle all the jobs related to recipes
 */
class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  /**
   * @description Displays list of applications
   * @param param0 query: To limit the number of records to be fetched and skip any number of documents
   * @param param1 body: Includes those filters based on which the documents are to be filtered
   */
  public async list({ query, body }): Promise<IListOutput[]> {
    console.log("Users - List:", JSON.stringify(query), JSON.stringify(body));

    try {
      const { limit = "-1", skip = "0" } = query;
      let users: IListOutput[] = await this.userRepository.list({});
      users = sliceData(users, { limit: Number(limit), skip: Number(skip) }).map(convertToUserOutput);
      return users;
    } catch (err) {
      console.log('Error in Users controller List :::::::', err);
      throw err;
    }
  }

  public async create({ body }): Promise<IUserModel> {
    console.log("Users - Add:", JSON.stringify(body));

    try {
      const { email, password, username } = body;
      let user: any = await this.userRepository.create({ email, password, username });
      user = convertToUserOutput(user);
      return user;
    } catch (err) {
      console.log('Error in User Controller Add :::::::', err);
      throw err;
    }
  }

  /**
   * @description Returns list of users
   * @param param0 query: To limit the number of records to be fetched and skip any number of documents
   * @param param1 body: Includes those filters based on which the documents are to be filtered
   */
  public async search({ query, body }): Promise<IListOutput[]> {
    console.log("UserController - Search:", JSON.stringify(body));
    return this.list({ query, body });
  }
}

export default new UserController();
