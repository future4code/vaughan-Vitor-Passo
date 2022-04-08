import express from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection';

const app = express()
app.use(express.json())
app.use(cors())


//2) a)

const updateSalary = async (id: string, salary: number): Promise <any> => {
    await connection("actor").update({salary: salary}).where("id", id)
}

const deleActor = async (id: string) => {
    await connection('actor').delete().where("id", id)
}
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });

    return result[0].average;
  };

type Actor = {
    id: number,
    nome: string,
    salary: number,
    gender: string
}
const createActor = async (ator: Actor) :Promise<any> => {
    // try {
    //     await connection
    // } catch (e: any) {
    //     console.log(e.message)
    // }

}


app.get("/Actor", async(req, res) : Promise <void> =>{
        try {
            const resultado = await connection("actor")
            console.log(resultado)
            res.status(201).send(resultado)
        } catch (e: any) {
            res.status(500).send(e.message)
        }
})

app.get("/name/:name", async(req, res) : Promise <void> =>{
    try {

        const name = req.params.name
        if (!name) {
            throw new Error("Insira um valor válido")
        }
        const resultado = await connection.raw(`
            SELECT * FROM actor WHERE nome = "${name}"
        `)
        console.log(resultado[0])
        res.status(201).send(resultado[0])
    } catch (e: any) {
        switch (e.message) {
            case "Insira um valor válido":
                res.status(403).send(e.message)
                break;

            default:
                res.status(500).send(e.message)
                break;
        }

    }
})

app.get("/count", async (req, res)=>{
    try{
        const gender = req.query.gender
        const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `)
        console.log(result)
        res.status(201).send(result)

    }catch(e: any){

    }

})

app.post("/createActor", async (req, res)=>{
    try {
        const {id, nome, salary, gender} = req.body
        const actor = await connection("actor").insert(createActor(
            {id,
             nome, 
             salary, 
             gender}
        ))
        console.log(actor)
        res.status(201).send(actor)
        
    } catch (e: any) {
        res.status(404).send(e.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});