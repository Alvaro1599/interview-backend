"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const enum_1 = require("./enum");
const database_1 = require("./database");
const testController_1 = require("./testController");
const test2Controller_1 = require("./test2Controller");
dotenv_1.default.config();
class App {
    constructor() {
        this.database = database_1.Database;
        this.app = (0, express_1.default)();
        this.routes = [test2Controller_1.Test2, testController_1.Test];
        this.configPort();
    }
    configPort() {
        let temporalPort = Number(process.env.PORT);
        if (!temporalPort || isNaN(temporalPort)) {
            throw "the port is not defined or is not a number";
        }
        this.app.set(enum_1.AppI.PORT, temporalPort);
    }
    configRouters() {
        this.routes.forEach(route => {
            this.app.use(route.router, route.router);
        });
    }
}
exports.App = App;
