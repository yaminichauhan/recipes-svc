"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const configurations_1 = require("./config/configurations");
const server = new Server_1.default(configurations_1.default);
server.init();
//# sourceMappingURL=index.js.map