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

/*
Crie um ??ltimo endpoint que possua todas as funcionalidades acima 
(as duas filtragens, a ordena????o e a pagina????o). 
Atribua valores padr??o para filtragem, ordena????o e pagina????o para que:

- Caso o usu??rio n??o forne??a par??metro de filtragem, o endpoint busque todos os users;
- Caso o usu??rio n??o forne??a par??metro de ordena????o, o endpoint ordene por **nome** em ordem **decrescente;**
- Caso o usu??rio n??o forne??a n??mero de p??gina, deve come??ar na p??gina 1

*/
export const getUsers = async (req: Request, res: Response): Promise <void> => {
    try {
        let filter = req.params.filter as string
        let order = req.query.order as string
        const quantifyUsers = 5
        let quantifyPages = Number(req.query.quantifyPages)
        let orderBy = req.query.orderBy as string
        let offset = quantifyUsers * (quantifyPages - 1)
       
        if(!order){
            order = 'name'
        }
        if(!orderBy){
            orderBy = 'DESC'
        }
        if(!filter){
            filter = ''
        }
        if(quantifyPages < 1){
            throw new Error("A Quantidade de pagina n??o pode ser menor que 1")
        }
        
        const result = await connection('aula48_exercicio')
        .select('*')
        .from('aula48_exercicio')
        .where('name', 'like', `%${filter}%`)
        .orderBy(`${order}`, `${orderBy}`)
        .limit(quantifyUsers)
        .offset(offset)
        res.status(201).send(result)
    } catch (e: any) {
        res.status(404).send({message: e.message})
    }
}