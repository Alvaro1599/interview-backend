"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongodb_1 = require("mongodb");
class Database {
    static init() {
        if (!(process.env.DATABASE_URI)) {
            throw "DATABASE_URI is not defined";
        }
        Database.client = new mongodb_1.MongoClient(process.env.DATABASE_URI);
    }
}
exports.Database = Database;
Database.client = undefined;
