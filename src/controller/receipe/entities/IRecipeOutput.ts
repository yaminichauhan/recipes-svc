interface IInstructions {
  heading: string;
  process1: string;
  process2: string;
  conclusion: string;
}
export default interface IRecipeOutput {
  category: string;
  description: string;
  name: string;
  imageUrl: string;
  instructions: IInstructions;
  likes: number;
  username: string;
  createdAt?: Date;
  originalId?: string;
}
