import express, {Express, Request, Response, Router} from "express";
import {createProduct, deleteProduct, getProductById, getProducts, updateProduct} from "../services/product";
import {deleteProductRepository, getProductByIdRepository} from "../repository/product";

export  const router:Router=express.Router();

router.put("/:id",async function (req:Request,res:Response) {
    try{
        const {id}=req.params
        return res.json(await updateProduct(req.body,id))
    }
    catch (e) {
        res.json(e).status(404)
        throw e
    }
})

router.post("/",async function (req:Request,res:Response) {
      try{
          console.log(req.body)
          if (req.body.update){
              const {id}=req.params
              const {name,description,img} = req.body
              return res.json(await updateProduct(req.body,id))
          }
          console.log(req.body,"zzzz")
              const {name,description,img} = req.body
             return res.json(await createProduct({name,description,img}))
      }
      catch (e) {
          res.json(e).status(404)

                throw e
      }
})

router.get("/",async function (req:Request,res:Response) {
    try{
        return res.json(await getProducts())
    }
    catch (e) {
        res.json(e).status(404)
    }
})

router.get("/:id",async function (req:Request,res:Response) {
    try{
        const {id} = req.params
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

