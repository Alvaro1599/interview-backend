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
dotenv_1.default.config();
class App {
    constructor() {
        this.database = database_1.Database;
        this.app = (0, express_1.default)();
        this.configPort();
        this.database.init();
    }
    configPort() {
        let temporalPort = +process.env.PORT;
        if (!temporalPort || isNaN(temporalPort)) {
            throw "the port is not defined or is not a number";
        }
        this.app.set(enum_1.AppI.PORT, temporalPort);
    }
}
exports.App = App;
