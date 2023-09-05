"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test2 = void 0;
const express_1 = __importDefault(require("express"));
class Test2 {
    constructor() {
        this.router = express_1.default.Router();
        this.alias = "/test2";
        this.router.get("/a", function (req, res) {
            res.send("asdfaaaa");
        });
    }
}
exports.Test2 = Test2;
