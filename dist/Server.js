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
const express = require("express");
const configurations_1 = require("./config/configurations");
const Database_1 = require("./libs/Database");
const router_1 = require("./router");
const notFoundHandler_1 = require("./middlewares/notFoundHandler");
const Swagger_1 = require("./libs/Swagger");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler_1 = require("./middlewares/errorHandler");
console.log("....................config", configurations_1.default);
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
        this.configurations = config;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.open(this.configurations.mongoUri);
            this.initCors();
            this.initJsonParser();
            this.initSwagger();
            this.setupRoutes();
            this.setupErrorHandler();
            this.app.listen(configurations_1.default.port, () => {
                console.log(`Server started listening at port ${configurations_1.default.port}`);
            });
        });
    }
    initJsonParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    initCors() {
        this.app.use(cors({
            optionsSuccessStatus: 200,
            origin: '*'
        }));
    }
    setupRoutes() {
        const { apiPrefix } = this.configurations;
        // mount all routes on /api path
        this.app.use(apiPrefix, router_1.default);
        // catch 404 and forward to error handler
        this.app.use(notFoundHandler_1.default);
    }
    initSwagger() {
        const { swagger: { swaggerUrl, swaggerDefinition } } = this.configurations;
        const swaggerSetup = new Swagger_1.default();
        // JSON route
        this.app.use(`${swaggerUrl}.json`, swaggerSetup.getRouter({
            swaggerDefinition
        }));
        // UI route
        const { serve, setup } = swaggerSetup.getUI(swaggerUrl);
        this.app.use(swaggerUrl, serve, setup);
    }
    setupErrorHandler() {
        const { nodeEnv } = this.configurations;
        // error handler, send stacktrace only during development
        this.app.use(errorHandler_1.default(nodeEnv));
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map