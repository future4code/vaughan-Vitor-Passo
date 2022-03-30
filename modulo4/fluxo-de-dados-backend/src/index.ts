import express from 'express'
import cors from 'cors'

import { product } from './data'
const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", (req, res)=>{
    res.send("API funcionando e rodando na porta 3003")
})

// esse endPoint retorna todos os produtos
app.get("/product", (req, res)=>{
    res.status(201).send(product)
})

// esse endPoint é capaz de editar o preço de um produto
app.put("/editProduct/:idPrice", (req, res)=>{
    try {
        let newPrice = req.body.price
        let id = req.params.idPrice
         product.forEach(product=>{
             if(id === product.id){
                product.price = newPrice
             }
        })
        
        res.status(201).send(product)
        
    } catch (error) {
        
    }
})

//esse endPoint é capaz de excluir um produto
app.delete("/deleteProduct/:idProduct", (req, res)=>{
    let id = req.params.idProduct
    const deletandoProduto = product.filter((deleted)=>{
        return id !== deleted.id
    })
    res.status(201).send(deletandoProduto)
})

// esse endPoint Cria um novo produto
app.post("/createProduct", (req, res)=>{
    try{
        
        let id = Date.now()
        let name = req.body.name
        let price =  req.body.price
        let typeName = typeof name
        let typePrice = typeof price
        
        if(!name || !price){
            throw new Error("Erro um campo não prenchido")
        }
        else if(typeName !== 'string'){
            throw new Error("name não é uma string")
        }
        else if(typePrice !== "number"){
            throw new Error("O tipo do preço tem ser que number")
        }
        else if (price === 0 || price < 0) {
            throw new Error("O Preço tem que ser positivo")
        }
        const addProduct = {        
            id: String(id),
            name: name,
            price: Number(price)
        }
        product.push(addProduct)
        res.status(201).send(product)
    }
    catch(e: any){
        switch (e.message) {
            case "Erro um campo não prenchido":
                res.status(422).send(e.message)
                break;
            case "name não é uma string":
                res.status(400).send(e.message)
                break
            case "O tipo do preço tem ser que number":
                res.status(400).send(e.message)
                break
            case "O Preço tem que ser positivo":
                res.status(400).send(e.message)
            default:
                res.send(500).send(e.message)
                break;
        }
    }
})



app.listen(3003, ()=>{
    console.log("Back end rodando na porta 3003")
})
