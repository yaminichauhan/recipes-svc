import { commonValidations } from "../../validations/commonValidations";
import { isString, isNumber } from "../../libs/utilities";

const validations = Object.freeze({
  category: {
    in: ["body"],
    errorMessage: "Category must be a string",
    optional: true,
    isArray: true,
    custom: {
      options: (category: string[]) => isString(category),
      errorMessage: "Category must be a string!"
    }
  },
  description: {
    in: ["body"],
    errorMessage: "Description must be a string",
    optional: true,
    isArray: true,
    custom: {
      options: (description: string[]) => isString(description),
      errorMessage: "Description must be a string!"
    }
  },
  name: {
    in: ["body"],
    errorMessage: "Name of the recipe must be a string",
    optional: true,
    isArray: true,
    custom: {
      options: (name: string[]) => isString(name),
      errorMessage: "Name of the recipe must be a string!"
    }
  },
  instructions: {
    in: ["body"],
    errorMessage: "Instructions must be a string",
    optional: true,
    isArray: true,
    custom: {
      options: (instructions: string[]) => isString(instructions),
      errorMessage: "Instructions must be of type string!"
    }
  },
  likes: {
    in: ["body"],
    errorMessage: "Likes should be a number!",
    optional: true,
    isArray: true,
    custom: {
      options: (Likes: number[]) => isNumber(Likes),
      errorMessage: "Likes should be a number"
    }
  },
  username: {
    in: ["body"],
    errorMessage: "Username of the recipe must be a string",
    optional: true,
    isArray: true,
    custom: {
      options: (username: string[]) => isString(username),
      errorMessage: "Username of the recipe must be a string!"
    }
  }
});

export default Object.freeze({
  list: {
    limit: commonValidations.limit,
    skip: commonValidations.skip
  },
  search: {
    category: validations.category,
    description: validations.description,
    name: validations.name,
    instructions: validations.instructions,
    likes: validations.likes,
    username: validations.username,
  }
});
