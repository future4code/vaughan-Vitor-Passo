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
    balance: number,
    data: string,
    desc: string
}
const app = express()
app.use(express.json())

app.use(cors())

app.get("/saldo", (req, res)=>{
    console.log("Test deu certo")
    res.send("Deu certo")
})

app.post("/createAccount", (req, res)=>{
    try {
        const newName = req.body.name
        let newBirth = req.body.birth
        const newCpf = req.body.cpf
        let year:number = Date.now()
       
        let date = new Date(newBirth)
        let newDate = Number(date)
        let years = 1000*60*60*24*365;

        let novaData = (year - newDate) / years


        if (!newName || !newBirth || !newCpf) {
            throw new Error("Erro campos não preenchidos")
        }
        
        else if(novaData < 18){
            throw new Error("Infelizmente você é menor de idade e não pode criar uma conta no labeBank!")
        }
        
        const createAccount: Users = {
            name: newName,
            birth: newBirth,
            cpf: newCpf,
            balance: 0,
            transition: []
        }
        users.push(createAccount)
        res.status(201).send(users)
    } catch (e: any) {
        switch (e.message) {
            case "Erro campos não preenchidos":
                res.status(422).send(e.message)
                break;
            case "Infelizmente você é menor de idade e não pode criar uma conta no labeBank!":
                res.status(401).send(e.message)
            default:
                res.status(500).send(e.message)
                break;
        }
    }
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