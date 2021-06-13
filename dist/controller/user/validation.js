"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonValidations_1 = require("../../validations/commonValidations");
const utilities_1 = require("../../libs/utilities");
const validations = Object.freeze({
    email: {
        in: ["body"],
        errorMessage: "Email must be of type string!",
        optional: true,
        isArray: true,
        custom: {
            options: (email) => utilities_1.isString(email) && utilities_1.isValidEmail(email),
            errorMessage: "Invalid email!"
        }
    },
    password: {
        in: ["body"],
        errorMessage: "Password must be of type string!",
        optional: true,
        isArray: true,
        custom: {
            options: (pass) => utilities_1.isString([pass]),
            errorMessage: "Invalid password!"
        }
    },
    username: {
        in: ["body"],
        errorMessage: "Username must be a string",
        optional: true,
        isArray: true,
        custom: {
            options: (username) => utilities_1.isString(username),
            errorMessage: "Invalid username!"
        }
    }
});
exports.default = Object.freeze({
    list: {
        limit: commonValidations_1.commonValidations.limit,
        skip: commonValidations_1.commonValidations.skip
    },
    search: {
        email: validations.email,
        password: validations.password,
        username: validations.username,
    }
});
//# sourceMappingURL=validation.js.map