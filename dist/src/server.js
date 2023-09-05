"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const enum_1 = require("./enum");
const index_1 = require("./index");
class server {
    constructor() {
        this.server = new index_1.App();
        this.server.app.listen(this.server.app.get(enum_1.AppI.PORT), () => {
            console.log("server is ready on port:" + this.server.app.get(enum_1.AppI.PORT));
        });
    }
}
exports.server = server;
new server();
