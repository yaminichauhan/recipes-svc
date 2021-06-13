import { Document } from "mongoose";

interface IInstructions {
  heading: string;
  process1: string;
  process2: string;
  conclusion: string
}

export default interface IRecipeModel extends Document {
  id: string;
  category: string;
  createdAt: Date;
  deletedAt?: Date;
  description: string;
  name: string;
  instructions: IInstructions;
  imageUrl: string;
  likes: number;
  username: string;
  originalId: string;
}
