import {Database} from "../database";
import {ProductI} from "../database/entities/productI";
import {ObjectId} from "mongodb";
import * as querystring from "querystring";

const client = Database.client

export async function createProductRepository({description, img, name}: {
    description: string,
    img: string,
    name: string
}){
    try{
        const product =Database.instance.collection<ProductI>("Product");
        return await product.insertOne({
    description, img, name
});
    }
    catch (e) {
        throw e
    }

}

export async function deleteProductRepository(id:string){
    try{
        const product =Database.instance.collection<ProductI>("Product");
        return await product.deleteOne({_id:new ObjectId(id) });
    }
    catch (e) {
        throw e
    }

}

export async function updateProductRepository(body: {
    description: string,
    id:string
    img: string,
    name: string
},id:string){
    try{
        let query=body
       Object.keys(query).forEach(key=>{
           if (!(query.hasOwnProperty(key))){
               delete query[key as keyof typeof query]
           }
       })
        const product =Database.instance.collection<ProductI>("Product");
        return await product.updateOne({_id:new ObjectId(id) }, {$set:query});
    }
    catch (e) {
        throw e
    }

}

export async function getProductByIdRepository(id:string){
    try{
        const product =Database.instance.collection<ProductI>("Product");
        return await product.findOne({_id:new ObjectId(id) });
    }
    catch (e) {
        throw e
    }

}