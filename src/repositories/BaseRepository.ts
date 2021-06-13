import { Document, Model } from "mongoose";

import { Nullable } from "../libs/Nullable";
import { IQueryBaseCreate } from "./entities";
import { lean, leanObject } from "../libs/utilities";

export default abstract class BaseRepository<D extends Document, M extends Model<D>> {
  /**
   * Create new application
   * @property {string} id - Record unique identifier.
   * @returns {Application}
   */
  protected modelType: M;
  constructor(modelType) {
    this.modelType = modelType;
  }

  // /**
  //  * Get application list.
  //  * @property {number} skip - Number of records to be skipped.
  //  * @property {number} limit - Limit number of records to be returned.
  //  * @returns {Application[]}
  //  */
  // public async list(query: IQueryBaseList): Promise<D[]> {
  //   console.log("BaseRepository - List");

  //   const { limit, skip, ...conditions } = query;

  //   return this.getAll(conditions, null, { limit, skip, sort: { createdAt: -1 } });
  // }

  // /**
  //  * Get.
  //  * @property {string} id - _id of the record
  //  * @returns {D}
  //  */
  // public async get(options: IQueryBaseGet): Promise<Nullable<D>> {
  //   console.log("BaseRepository - Get");

  //   return this.getById(options.id);
  // }

  /**
   * Create
   * @property {string} body.name - The name of record.
   * @returns {D}
   */
  // public async create(options: IQueryBaseCreate): Promise<D> {
  //   console.log("BaseRepository - Create");

  //   const id = generateObjectId();
  //   const model = new this.modelType({
  //     ...options,
  //     _id: id
  //   });

  //   return model.save();
  // }

  /**
   * Insert Many
   * @returns {Documents[]}
   */
  public async insertMany(docs: IQueryBaseCreate[], options?: any | null): Promise<D[]> {
    console.log("BaseRepository - insertMany");
    return await this.modelType.insertMany(docs, options);
  }

  public async count(conditions: any = {}): Promise<number> {
    return await this.modelType.count(conditions);
  }

  protected async getAll(conditions: any, projection?: any | null, options?: any | null, populate?: any | null): Promise<D[]> {
    return populate
      ? (await this.modelType
        .find(conditions, projection, options)
        .populate(populate)
        .lean()).map(leanObject)
      : (await this.modelType.find(conditions, projection, options).lean()).map(leanObject);
  }
  // protected getById(id: string): Promise<Nullable<D>> {
  //   return lean(this.modelType.findById(id));
  // }
  // protected getByIds(ids: string[]): Promise<D[]> {
  //   return this.getAll({ _id: { $in: ids } });
  // }
  protected async findOne(conditions: any, populate?: any | null): Promise<Nullable<any>> {
    return await populate ? lean(this.modelType.findOne(conditions).populate(populate)) : lean(this.modelType.findOne(conditions));
  }

  public async deleteAll(): Promise<D> {
    return await this.modelType.deleteMany({});
  }
}
