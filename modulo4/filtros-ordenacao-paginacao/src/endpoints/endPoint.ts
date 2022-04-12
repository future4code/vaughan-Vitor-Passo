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

export const orderUser = async (req: Request, res: Response): Promise <void> => {
    try {
        let order = req.query.order;
        let orderBy = req.query.orderBy as string
        if(!order){
            order = 'email'
        }
        if(!orderBy){
            orderBy = 'ASC'
        }
        const result = await connection('aula48_exercicio')
        .select('*').orderBy(`${order}`, `${orderBy}`)
        console.log(result)
        res.status(201).send(result)
    } catch (e:any) {
        res.status(422).send({msg: e.message})
    }
}

export const limitUser = async (req: Request, res: Response): Promise<void> => {
    const numberPage = Number(req.params.num)
    let quantify = 5
    let offset = quantify * (numberPage - 1)
    try {
        const limit = await connection('aula48_exercicio')
        .select('*').from('aula48_exercicio')
        .limit(quantify)
        .offset(offset)
        res.status(201).send(limit)
    } catch (e: any) {
        res.status(404).send({message: e.message})
    }
}