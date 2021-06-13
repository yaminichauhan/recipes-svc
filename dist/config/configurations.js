"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const config = {
    apiPrefix: process.env.API_PREFIX || '/api',
    mongoUri: process.env.MONGO_URI,
    nodeEnv: process.env.NODE_ENV,
    port: Number(process.env.PORT),
    swagger: {
        swaggerUrl: process.env.SWAGGER_URL || '/api-docs',
        swaggerDefinition: {
            basePath: process.env.SWAGGER_BASE_PATH || '/api',
            info: {
                description: process.env.SWAGGER_DESCRIPTION || 'Recipes API with Swagger',
                title: process.env.SWAGGER_TITLE || "Recipes API",
                version: process.env.SWAGGER_VERSION || "1.0.0"
            }
        }
    }
};
exports.default = config;
//# sourceMappingURL=configurations.js.map