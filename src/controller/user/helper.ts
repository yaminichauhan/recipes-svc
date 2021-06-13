import { IListOutput } from "./entities";

export function convertToUserOutput(user): IListOutput {
  return {
    email: user.email,
    password: user.password,
    username: user.username,
    favorites: user.favorites
  };
}
