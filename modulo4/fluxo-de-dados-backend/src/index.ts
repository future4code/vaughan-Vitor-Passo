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
     product.forEach(product=>{
         if(id === product.id){
            product.price = newPrice
         }
    })
    console.log(product)
    res.status(201).send(product)
})

//esse endPoint é capaz de excluir um produto
app.delete("/deleteProduct/:idProduct", (req, res)=>{
    let id = req.params.idProduct
    const deletandoProduto = product.filter((deleted)=>{
        return id !== deleted.id
    })
    res.status(201).send(deletandoProduto)
})

//refatoração do exercicio 3
app.post("/createProduct", (req, res)=>{
    try{
        
        let id = Date.now()
        let name = req.body.name
        let price = req.body.price
        if(!name || !price){
            throw new Error("Erro um campo não prenchido")
        }
        const addProduct = {        
            id: String(id),
            name: req.body.name,
            price: req.body.price
        }
        product.push(addProduct)
        res.status(201).send(product)
    }
    catch(e: any){
        switch (e.message) {
            case "Erro um campo não prenchido":
                res.status(422).send(e.message)
                break;
        
            default:
                break;
        }
    }
})

app.listen(3003, ()=>{
    console.log("Back end rodando na porta 3003")
})