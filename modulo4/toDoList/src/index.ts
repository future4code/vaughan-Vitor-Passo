import express from 'express'
import cors from 'cors'

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

app.post('/task', async (req, res): Promise <void> => {
    try {
        let id = Date.now().toString()
        let title = req.body.title
        let description = req.body.description
        let status = req.body.status
        let limit_date = Date.now().toString()
        let creator_user_id = Date.now().toString()
        const result = await connection('task').insert({
            id, title, description, status, limit_date, creator_user_id
        })     
        res.status(201).send(limit_date)
        console.log(limit_date)
    } catch (e: any) {
        switch (e.message) {
            case "value":
                res.status(401).send(e.message)
                break;
            default:
                res.status(500).send(e.message)
                break;
        }
    }
    
})

app.put('/editUSer/:id', async(req, res): Promise <void> =>{
    try {
        let name = req.body.name
        let nickName = req.body.nickName
        let email = req.body.email  
            await connection('TodoListUser').update({
                name, nickName, email
            }).where({id: req.params.id})
            res.status(201).send({message: "Usuario editado com sucesso!"})
            
    } catch (e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
})

app.get('/user',async (req, res)=> {
    const result = await connection('TodoListUser')
    console.log(result)
    res.status(201).send(result)
})

app.get('/user/:id', async (req, res)=>{

    try {
        const id = req.params.id
        if(!id){
            throw new Error("Insira um id válido");
        }
        const result = await connection.raw(`
            SELECT * FROM TodoListUser WHERE id = "${id}"
        `)
        res.status(201).send(result[0][0])
    } catch (e: any) {
        switch (e.message) {
            case "Insira um id válido":
                res.status(422).send(e.message)
                break;
        
            default:
                res.status(500).send(e.sqlMessage || e.message)
                break;
        }
    }
})


app.get('/task/:id',async (req, res) :Promise <void> => {
    try {
      const id = req.params.id
      const result = await connection.raw(`
        SELECT * FROM task WHERE id = "${id}"
      `)      
      console.log(result)
      res.status(201).send(result)
    } catch (e: any) {
        
    }
})


app.listen(3003, ()=>{
    console.log("Back end rodando na porta 3003")
})