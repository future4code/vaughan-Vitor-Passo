import express from 'express'
import cors from 'cors'
import { nodeModuleNameResolver } from 'typescript'
import connection from './connection'

const app = express()
app.use(express.json())
app.use(cors())



// const getId = async (id:string): Promise <void> => {
    
//     console.log(result)
// }

app.post('/createUser' , async(req, res)=>{
    
    try {
        let id = Date.now().toString()
        let name = req.body.name
        let nickName = req.body.nickName
        let email = req.body.email  

        if (!name || !nickName || !email ) {
            throw new Error("Favor preecha os campos!")
        }
        else{
            const result = await connection('TodoListUser').insert({
                id, name, nickName, email
            })
            res.status(201).send('Usuário cadastrado com sucesso')
            console.log(result[0])
        }
        
    } catch (e: any) {
        switch (e.message) {
            case "Favor preecha os campos!":
                res.status(422).send(e.message)
                break;
        
            default:
                res.status(500).send(e.message)
                break;
        }
    }
})

app.get('/user',async (req, res)=> {
    const result = await connection('TodoListUser')
    console.log(result)
    res.status(201).send(result)
})

app.get('/user/:id', async (req, res)=>{
    const id = req.params.id
    const result = await connection.raw(`
        SELECT * FROM TodoListUser WHERE id = "${id}"
    `)
    
    res.status(201).send(result[0][0])
})
app.listen(3003, ()=>{
    console.log("Back end rodando na porta 3003")
})