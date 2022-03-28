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

type Posts = {
    id: string | number,
    title: string,
    body: string,
    userId: string | number
}

let post: Posts[] = [
    
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
        
]


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
    res.status(220).send(usuario)
}))

app.get("/posts", ((req, res)=>{
    res.status(215).send(post)
}))