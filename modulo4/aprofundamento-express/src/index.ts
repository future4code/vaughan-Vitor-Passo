import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", (req, res)=>{
    res.status(201).send("Pong! 🏓")
})

app.listen(3003, ()=>{
console.log("Back and Rodando na porta 3003")
});

