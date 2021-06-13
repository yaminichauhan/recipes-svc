"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../libs/constants");
const errors_1 = require("../entities/errors");
const responses_1 = require("../entities/responses");
function errorHandler(env) {
    return function (err, req, res, next) {
        let response;
        switch (err.type) {
            case errors_1.DuplicateKeyError.name:
                response = new responses_1.UnprocessableResponse(err.data, err.message);
                break;
            case errors_1.UnprocessableError.name:
                response = new responses_1.UnprocessableResponse(err.data, err.message);
                break;
            case errors_1.BadRequestError.name:
                response = new responses_1.BadRequestResponse(err.data, err.message);
                break;
            case errors_1.ForbiddenError.name:
                response = new responses_1.ForbiddenResponse(err.message);
                break;
            case errors_1.NotFoundError.name:
                response = new responses_1.NotFoundResponse(err.message);
                break;
            case errors_1.ConfigurationError.name:
                response = new responses_1.ConfigurationErrorResponse(err.data);
                break;
            case errors_1.StrapiError.name:
                response = new responses_1.StrapiErrorResponse(err.message, err.status);
                break;
            case responses_1.InternalServerErrorResponse.name:
            default:
                response = new responses_1.InternalServerErrorResponse(err.data, err.isPublic ? err.message : constants_1.StatusCodes[err.status]);
                break;
        }
        res.locals.response = response;
        res.locals.outcome = "failed";
        res.status(response.metadata.code).json(response);
    };
}
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map