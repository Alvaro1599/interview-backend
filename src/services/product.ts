import {Request, Response} from "express";
import {
    createProductRepository,
    deleteProductRepository,
    getProductByIdRepository, getProductsRepository,
    updateProductRepository
} from "../repository/product";

export async function createProduct(body:{name:string,description:string,img:string}){
    try{
        const {name,description,img} = body
        return await createProductRepository({name,description,img})
    }
    catch (e) {
        throw e
    }

}

export async function updateProduct(body:{name:string,description:string,img:string,id:string},id:string){
    try{
        return await updateProductRepository(body,id)
    }
    catch (e) {
        throw e
    }

}


export async function deleteProduct(body:{id:string}){
    try{
        const {id} = body
        return await deleteProductRepository(id)
    }
    catch (e) {
        throw e
    }

}

export async function getProductById(body:{id:string}){
    try{
        const {id} = body
        return await getProductByIdRepository(id)
    }
    catch (e) {
        throw e
    }

}


export async function getProducts (){
    try{
        return await getProductsRepository();
    }
    catch (e) {
        throw e
    }

}