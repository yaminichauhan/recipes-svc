"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../entities/errors");
const responses_1 = require("../entities/responses");
function controllerAdapter(controller = null, functionName = "") {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const { headers: { authorization }, params, query, body } = req;
        const { locals } = res;
        try {
            if (locals.isHit) {
                return next();
            }
            const result = yield controller[functionName]({ headers: { authorization }, params, query, locals, body });
            res.locals.isHit = true;
            if (result.type === errors_1.APIError.name) {
                // result is an APIError
                console.log(result);
                next(result);
            }
            else {
                const response = new responses_1.SuccessResponse(result);
                res.locals.response = response;
                res.json(response);
                next();
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
}
exports.default = controllerAdapter;
//# sourceMappingURL=controllerAdapter.js.map