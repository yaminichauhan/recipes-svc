import { Document } from "mongoose";

export default interface IUserModel extends Document {
  id: string;
  username: string;
  createdAt: Date;
  deletedAt?: Date;
  email: string;
  password: string;
  favorites: string[];
  originalId: string
}
