import { connection } from "../data/connection";
import { request, Request, Response } from "express"

export const getAllUser = async(req: Request, res:Response): Promise <void> =>{
    try {
        const nome = req.query.nome as string
        if(!nome){
            throw new Error("Preencha um campo")
        }
        // const users = await connection('aula48_exercicio')
        const userName = await connection('aula48_exercicio')
        .select('*')
        .where('name', 'LIKE', `%${nome}%`)
        console.log(userName)
        res.status(201).send(userName)
    } catch (e:any) {
        res.status(422).send({msg: e.message})
    }
} 

export const getUserName = async (req: Request, res: Response): Promise<any> => {
    try {
        const name = req.params.name
        const result = await connection('aula48_exercicio')
        .select('*')
        .where('name', 'LIKE', `%${name}%`);
        res.status(201).send(result)
    } catch (e:any) {
        res.status(422).send({msg: e.message})
    }
}