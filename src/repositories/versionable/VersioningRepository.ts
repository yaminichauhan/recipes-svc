import { Model } from "mongoose";
import { IQueryBaseCreate, IQueryBaseUpdate } from "../entities";
import { Nullable } from "../../libs/Nullable";
import BaseRepository from "../BaseRepository";
import IVersionableDocument from "./IVersionableDocument";
import { generateObjectId } from "../../libs/utilities";
import { lean } from "../../libs/utilities";

export default class VersioningRepository<D extends IVersionableDocument, M extends Model<D>> extends BaseRepository<D, M> {
  constructor(modelType) {
    super(modelType);
  }

  /**
   * Create new application
   * @property {string} body.name - The name of record.
   * @returns {Application}
   */
  public async create(options: any): Promise<D> {
    console.log("VersioningRepository - Create:", JSON.stringify(options));

    const id = options.id ? options.id : generateObjectId();
    const model = new this.modelType({
      ...options,
      _id: id,
      originalId: id
    });
    console.log("model................model........", model);

    return await model.save();
  }

  /**
   * Insert Many
   * @returns {Documents[]}
   */
  public async insertMany(docs: IQueryBaseCreate[], options?: any | null): Promise<D[]> {
    console.log("VersioningRepository - insertMany");

    const docsToInsert: any = docs.map(item => {
      const id = item.id ? item.id : generateObjectId();
      return { ...item, _id: id, originalId: id };
    });

    return await super.insertMany(docsToInsert, options);
  }

  public async updateMany(docs: any[], options?: any | null): Promise<D[]> {
    console.log("VersioningRepository - updateMany");

    const docsToUpdate: any = [];
    for (const item of docs) {
      await this.invalidate(item.originalId);

      const newInstance = Object.assign({}, item, options);
      newInstance["_id" as string] = generateObjectId();
      delete newInstance.createdAt;
      docsToUpdate.push(newInstance);
    }

    return await super.insertMany(docsToUpdate, options);
  }

  /**
   * Create new application
   * @property {string} id - Record unique identifier.
   * @returns {Application}
   */
  public async update(options: IQueryBaseUpdate): Promise<D> {
    console.log("VersioningRepository - Update:", JSON.stringify(options));

    console.log("Searching for previous valid object...");
    const previous = await this.getById(options.originalId);

    console.log("Invalidating previous valid object...");
    await this.invalidate(options.originalId);

    const newInstance = Object.assign({}, previous, options);
    newInstance["_id" as string] = generateObjectId();
    delete previous.deletedAt;
    const model = new this.modelType(newInstance);

    console.log("Creating new object...");

    return await model.save();
  }

  public async delete(id: string): Promise<D> {
    console.log("VersioningRepository - Delete:", id);

    console.log("Searching for previous valid object...");
    const previous = await this.getById(id);

    console.log("Invalidating previous valid object...");
    await this.invalidate(id);

    const newId = generateObjectId();
    const newInstance = Object.assign({}, previous, { _id: newId, isSoftDeleted: true });
    const model = new this.modelType(newInstance);

    return await model.save();
  }

  protected async getAll(conditions: any, projection?: any | null, options?: any | null, populate?: any | null): Promise<D[]> {
    console.log("VersioningRepository - getAll:", JSON.stringify(conditions));

    const updatedQuery = {
      deletedAt: null,
      ...conditions
    };

    return await super.getAll(updatedQuery, projection, options, populate);
  }

  protected async getById(id: string, populate?: any | null): Promise<Nullable<D>> {
    console.log("VersioningRepository - getById", id, populate);

    return await super.findOne({ originalId: id, deletedAt: null }, populate);
  }

  protected async getByQuery(query: any): Promise<Nullable<D>> {
    query.deletedAt = null;
    return await super.findOne(query);
  }

  protected async getByIds(ids: string[]): Promise<D[]> {
    console.log("VersioningRepository - getByIds", ids);

    return await this.getAll({ originalId: { $in: ids } });
  }

  public async count(conditions: any): Promise<number> {
    console.log("VersioningRepository - Count:", JSON.stringify(conditions));

    const updatedQuery = {
      deletedAt: null,
      ...conditions
    };

    return await super.count(updatedQuery);
  }

  protected async invalidate(id: string): Promise<any> {
    const now = new Date();
    return await lean(this.modelType.updateMany({ originalId: id, deletedAt: null }, { deletedAt: now }));
  }
}
