import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", (req, res)=>{
    res.send("API funcionando e rodando na porta 3003")
})

app.listen(3003, ()=>{
    console.log("Back end rodando na porta 3003")
})