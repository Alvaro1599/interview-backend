import express, {Express, Request, Response, Router} from "express";
import {RouterI} from "./utils/router";

export class Test2 implements RouterI{
    router:Router=express.Router()
    alias ="/test2";
    constructor(){
        this.router.get("/a",function (req:Request,res:Response) {
            res.send("asdfaaaa")
        })
    }

}