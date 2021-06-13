"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = require("./controller/receipe/route");
const route_2 = require("./controller/user/route");
const router = express_1.Router();
router.get("/health-check", (req, res) => {
    res.status(200).send("I am OK");
});
router.use("/recipes", 
// (req, res) => console.log("routerrrrrrrrrrrrrrrrr"),
route_1.default);
router.use("/users", 
// (req, res) => console.log("routerrrrrrrrrrrrrrrrr"),
route_2.default);
exports.default = router;
//# sourceMappingURL=router.js.map