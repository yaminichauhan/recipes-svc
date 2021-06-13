"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonValidations_1 = require("../../validations/commonValidations");
const utilities_1 = require("../../libs/utilities");
const validations = Object.freeze({
    category: {
        in: ["body"],
        errorMessage: "Category must be a string",
        optional: true,
        isArray: true,
        custom: {
            options: (category) => utilities_1.isString(category),
            errorMessage: "Category must be a string!"
        }
    },
    description: {
        in: ["body"],
        errorMessage: "Description must be a string",
        optional: true,
        isArray: true,
        custom: {
            options: (description) => utilities_1.isString(description),
            errorMessage: "Description must be a string!"
        }
    },
    name: {
        in: ["body"],
        errorMessage: "Name of the recipe must be a string",
        optional: true,
        isArray: true,
        custom: {
            options: (name) => utilities_1.isString(name),
            errorMessage: "Name of the recipe must be a string!"
        }
    },
    instructions: {
        in: ["body"],
        errorMessage: "Instructions must be a string",
        optional: true,
        isArray: true,
        custom: {
            options: (instructions) => utilities_1.isString(instructions),
            errorMessage: "Instructions must be of type string!"
        }
    },
    likes: {
        in: ["body"],
        errorMessage: "Likes should be a number!",
        optional: true,
        isArray: true,
        custom: {
            options: (Likes) => utilities_1.isNumber(Likes),
            errorMessage: "Likes should be a number"
        }
    },
    username: {
        in: ["body"],
        errorMessage: "Username of the recipe must be a string",
        optional: true,
        isArray: true,
        custom: {
            options: (username) => utilities_1.isString(username),
            errorMessage: "Username of the recipe must be a string!"
        }
    }
});
exports.default = Object.freeze({
    list: {
        limit: commonValidations_1.commonValidations.limit,
        skip: commonValidations_1.commonValidations.skip
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
//# sourceMappingURL=validation.js.map