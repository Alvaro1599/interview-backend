import express, {Express, Request, Response, Router} from "express";
import {createProduct, deleteProduct, getProductById, updateProduct} from "../services/product";
import {deleteProductRepository, getProductByIdRepository} from "../repository/product";

export  const router:Router=express.Router();

router.post("/",async function (req:Request,res:Response) {
      try{
              const {name,description,img} = req.body
             return res.json(await createProduct({name,description,img}))
      }
      catch (e) {
          res.json(e).status(404)

                throw e
      }
         })

router.get("/:id",async function (req:Request,res:Response) {
    try{
        console.log("req",req.params)
        const {id} = req.params
        console.log(id)
        return res.json(await getProductById({id}))
    }
    catch (e) {
        res.json(e).status(404)
    }
})

router.delete("/:id",async function (req:Request,res:Response) {
    try{
        const {id} = req.params
        return res.json(await deleteProduct({id}))
    }
    catch (e) {
        res.json(e).status(404)

        throw e
    }
})

router.put("/:id",async function (req:Request,res:Response) {
    try{
        const {id}=req.params
        const {name,description,img} = req.body
        return res.json(await updateProduct(req.body,id))
    }
    catch (e) {
        res.json(e).status(404)
        throw e
    }
})