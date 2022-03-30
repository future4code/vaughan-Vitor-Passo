import express from 'express'
import cors from 'cors'

import { product } from './data'
const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", (req, res)=>{
    res.send("API funcionando e rodando na porta 3003")
})

app.post("/createProduct", (req, res)=>{
    
    const addProduct = {
        id: '6',
        name: req.body.name,
        price: req.body.price
    }
    product.push(addProduct)
    res.status(201).send(product)
})

app.listen(3003, ()=>{
    console.log("Back end rodando na porta 3003")
})