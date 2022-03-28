//1)
import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())

app.use(cors())

app.get("/", ((req, res)=>{
    res.status(200).send("Vitin é lindo")
}))

app.listen(3003, ()=>{
    console.log("Back End Rodando na porta 3003")
})

type Tipo = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}
let usuario: Tipo[] = [
    {
        id: "12", 
        name: "Vitor",
        phone: 999094880,
        email: "vitor@gmail.com",
        website: "asd"
    },
    {
        id: "22", 
        name: "Cleitin",
        phone: 4569711,
        email: "cleitin@gmail.com",
        website: "cleitin22"
    },
    {
        id: "32", 
        name: "Iza",
        phone: 54879,
        email: "vitor@gmail.com",
        website: "asd"
    }
]

app.get("/users", ((req, res)=>{
    res.status(200).send(usuario)
}))