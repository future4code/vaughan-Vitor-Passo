import express from 'express'
import cors from 'cors'
import {users} from './data'
type Users = {
    name: string,
    birth: string,
    cpf: string,
    balance: number,
    transition: Transition[]
} 
type Transition = {
    transitionInAccount: any[]
}
const app = express()
app.use(express.json())

app.use(cors())

app.get("/saldo", (req, res)=>{
    console.log("Test deu certo")
    res.send("Deu certo")
})

app.post("/createAccount", (req, res)=>{
    const createAccount: Users = {
        name: req.body.name,
        birth: req.body.birth,
        cpf: req.body.cpf,
        balance: 0,
        transition: []
    }
    users.push(createAccount)
    res.status(201).send(users)
})

app.get("/users", (req, res)=>{
    res.status(201).send(users)
})

app.listen(3003, () =>{
    console.log("Servidor Rodando na porta 3003")
})