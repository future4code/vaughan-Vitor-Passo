import express from 'express'
import cors from 'cors'

import { product } from './data'
const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", (req, res)=>{
    res.send("API funcionando e rodando na porta 3003")
})

// esse endPoint Cria um novo produto
app.post("/createProduct", (req, res)=>{
    const addProduct = {
        id: '6',
        name: req.body.name,
        price: req.body.price
    }
    product.push(addProduct)
    res.status(201).send(product)
})

// esse endPoint retorna todos os produtos
app.get("/product", (req, res)=>{
    res.status(201).send(product)
})

// esse endPoint é capaz de editar o preço de um produto
app.put("/editProduct/:idPrice", (req, res)=>{
    let newPrice = req.body.price
    let id = req.params.idPrice
    const editPrice = product.filter(price=>{
        return id === price.id
    }).map(product=>{
        return {
            ...product,
            price: newPrice
        }
    })
    
    console.log(editPrice)
    res.status(201).send(editPrice)
})

app.listen(3003, ()=>{
    console.log("Back end rodando na porta 3003")
})