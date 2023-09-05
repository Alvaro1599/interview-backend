import express, {Express, Request, Response, Router} from "express";
import {RouterI} from "./utils/router";

export class Test implements RouterI{
    router:Router=express.Router()
    constructor(){
        this.router.get("/a",function (req:Request,res:Response) {
            res.send("asdfaaaa")
        })
    }

    alias: string="test1";

}