"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAGGER_URL = "/api-docs";
exports.API_PREFIX = "/api";
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodes[StatusCodes["CONFLICT"] = 409] = "CONFLICT";
    StatusCodes[StatusCodes["UNPROCESSABLE"] = 422] = "UNPROCESSABLE";
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["GET"] = "GET";
    HttpMethods["POST"] = "POST";
    HttpMethods["PUT"] = "PUT";
    HttpMethods["DELETE"] = "DELETE";
    HttpMethods["PATCH"] = "PATCH";
})(HttpMethods = exports.HttpMethods || (exports.HttpMethods = {}));
var METHODS;
(function (METHODS) {
    METHODS["CREATE"] = "CREATE";
    METHODS["UPDATE"] = "UPDATE";
    METHODS["DELETE"] = "DELETE";
})(METHODS = exports.METHODS || (exports.METHODS = {}));
//# sourceMappingURL=constants.js.map