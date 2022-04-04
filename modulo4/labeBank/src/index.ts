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

app.put("/addBalance/:idUser", (req, res)=>{
    try {
        const id = req.params.idUser
        const nome = req.query.nome
        const addBalance =  req.body.balance
        
        users.forEach(balance=>{
            
            if(id === balance.cpf && nome === balance.name){
                
                balance.balance = addBalance
                res.status(201).send(users)
            }
            else if(id !== balance.cpf){
                throw new Error("Erro ao encontrar cliente")
            }
            
        })
    } catch (e: any) {
        switch (e.message) {
            case "Erro ao encontrar cliente":
                res.status(403).send(e.message)
                break;
            
            default:
                break;
        }
    }
    
})

app.get("/users", (req, res)=>{
    res.status(201).send(users)
})

app.get("/getBalance/:id", (req, res)=>{
    try{
        const id =  req.params.id
        const nome = req.query.nome
        if (!id && !nome) {
            throw new Error("Erro ao encontrar cliente! Nome ou Cpf inválidos")
        }
        const showBalance = users.filter( balance =>{
            return id === balance.cpf && nome === balance.name 
        })
        .map((balance)=>{
            return balance
        })
        res.status(201).send(showBalance)
        console.log(showBalance)
    }
    catch(e: any){
        switch (e.message) {
            case "Erro ao encontrar cliente! Nome ou Cpf inválidos":
                res.status(401).send(e.message)
                break;
            default:
                break;
        }
    }
})

app.listen(3003, () =>{
    console.log("Servidor Rodando na porta 3003")
})