import express from 'express'
import cors from 'cors'

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const afazeres: ToDo[] = 
    [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        },
        {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": false
        },
      ]

const app = express()
app.use(express.json())
app.use(cors())

app.get("/toDo", (req, res)=>{
    const test = req.query.completed
        const listToDo = afazeres.filter((list)=>{
                 return String(list.completed) === test
        })
    res.status(201).send(listToDo)
})

app.post("/createTask", (req, res)=>{
    const userId = req.body.userId
    const id = req.body.id
    const title = req.body.title
    const completed = req.body.completed

    const newTask = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }
    afazeres.push(newTask)
    res.status(416).send(afazeres)
})

app.put("/editTask/:id", (req, res)=>{
    const id = Number(req.params.id)  
    const editComplited = afazeres.filter((completed)=>{
        return completed.id === id
    }).map((complited)=>{
        return {
        userId: complited.userId,
        id: complited.id,
        title: complited.title,
        completed: !complited.completed
        }
    })
    res.status(215).send(editComplited)
})

app.listen(3003, ()=>{
console.log("Back and Rodando na porta 3003")
});

