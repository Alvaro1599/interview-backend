import {MongoClient} from "mongodb";


export class Database{
    static client?:MongoClient=undefined;

    static init(){
        if (!(process.env.DATABASE_URI)){
                throw "DATABASE_URI is not defined"
        }
        Database.client=new MongoClient(process.env.DATABASE_URI)
    }
}