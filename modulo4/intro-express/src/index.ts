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
        },
        {
        "userId": 2,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 2,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
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

//6 Acredito que seria separada, pois seria mais facil o acesso. Se fosse junto teria
// que acessar o array de obejtos com as propriedades, sendo uma dela o array de post então seria
//trabalhoso, no minha perspectiva.

app.get("/posts/:UserId", ((req, res)=>{
    const idUser = req.params.UserId
    const retornandoId = post.filter((postId)=>{
        return postId.userId === Number(idUser)
    })
    res.send(retornandoId)
}))