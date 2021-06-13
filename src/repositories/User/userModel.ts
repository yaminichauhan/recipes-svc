import * as mongoose from "mongoose";

import IUserModel from "./IUserModel";
import UserSchema from "./UserSchema";

/**
 * User Schema
 */
const userSchema = new UserSchema(
  {
    _id: String
  },
  {
    collection: "Users",
    versionKey: false
  }
);

/**
 * indexes
 */
// userSchema.index({ name: 1 }, { collation: { locale: "en", strength: 2 } });
// userSchema.index({ originalId: 1, deletedAt: 1, code: 1 }, { unique: true });

/**
 * @typedef User
 */
export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>("User", userSchema);
