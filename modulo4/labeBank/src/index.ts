import express from 'express'
import cors from 'cors'
import {users} from "./data" 
const app = express()
app.use(express.json())

app.use(cors())

app.get("/saldo", (req, res)=>{
    console.log("Test deu certo")
    res.send("Deu certo")
})

console.log(users)
app.post("/createAccount", (req, res)=>{
    
    const createAccount = {
        name: req.body.name,
        birth: req.body.birth,
        cpf: req.body.cpf,
        balance: 0
    }

})


app.listen(3003, () =>{
    console.log("Servidor Rodando na porta 3003")
})