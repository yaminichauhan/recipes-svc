import { commonValidations } from "../../validations/commonValidations";
import { isString, isValidEmail } from "../../libs/utilities";

const validations = Object.freeze({
  email: {
    in: ["body"],
    errorMessage: "Email must be of type string!",
    optional: true,
    isArray: true,
    custom: {
      options: (email: any) => isString(email) && isValidEmail(email),
      errorMessage: "Invalid email!"
    }
  },
  password: {
    in: ["body"],
    errorMessage: "Password must be of type string!",
    optional: true,
    isArray: true,
    custom: {
      options: (pass: any) => isString([pass]),
      errorMessage: "Invalid password!"
    }
  },
  username: {
    in: ["body"],
    errorMessage: "Username must be a string",
    optional: true,
    isArray: true,
    custom: {
      options: (username: string) => isString(username),
      errorMessage: "Invalid username!"
    }
  }
});

export default Object.freeze({
  list: {
    limit: commonValidations.limit,
    skip: commonValidations.skip
  },
  search: {
    email: validations.email,
    password: validations.password,
    username: validations.username,
  }
});
