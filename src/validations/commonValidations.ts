import { isValidArrayOfIds, isValidArrayOfStrings } from "../libs/utilities";

export const commonValidations = Object.freeze({
  limit: {
    errorMessage: "limit should be a number!",
    in: ["query"],
    isInt: true,
    optional: true,
    toInt: true
  },
  skip: {
    errorMessage: "skip should be a number!",
    in: ["query"],
    isInt: true,
    optional: true,
    toInt: true
  },
  // id: {
  //   in: ["params"],
  //   errorMessage: "ID Bad Format",
  //   optional: false,
  //   custom: {
  //     options: (id: string) => isValidObjectId(id),
  //     errorMessage: "ID Bad Format"
  //   }
  // },
  // ids: {
  //   in: ["body"],
  //   errorMessage: "ids should be an Array of Ids!",
  //   optional: true,
  //   isArray: true,
  //   custom: {
  //     options: (ids: string[]) => isValidArrayOfIds(ids),
  //     errorMessage: "ID Bad Format!"
  //   }
  // },
  idsWithParam(paramName) {
    return {
      in: ["body"],
      errorMessage: `${paramName}'s should be an Array of Ids!`,
      optional: true,
      isArray: true,
      custom: {
        options: (ids: string[]) => isValidArrayOfIds(ids),
        errorMessage: `${paramName} Bad Format!`
      }
    };
  },
  names: {
    in: ["body"],
    errorMessage: "names should be an Array of strings!",
    optional: true,
    isArray: true,
    custom: {
      options: (names: string[]) => isValidArrayOfStrings(names),
      errorMessage: "name should be a string!"
    }
  }
});
