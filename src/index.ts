import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import {AppI} from "./enum";
import {Database} from "./database";
import {Test} from "./testController";
import {RouterI} from "./utils/router";
import {Test2} from "./test2Controller";

dotenv.config();

export class App{
    database= Database
    app:Express = express();
    routes:RouterI[]=[Test2,Test];
    constructor() {
        this.configPort()
    }

    private configPort(){
        let temporalPort: number = Number(process.env.PORT)
        if (!temporalPort || isNaN(temporalPort)){
            throw "the port is not defined or is not a number"
        }
        this.app.set(AppI.PORT,temporalPort)
    }

    private configRouters(){
        this.routes.forEach(route=>{
            this.app.use(route.router,route.router)
        })
    }
}