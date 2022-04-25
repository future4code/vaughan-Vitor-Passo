import { Request, Response } from "express";
import { connection } from "../data/connection";

async function login(req: Request, res: Response):Promise<void> {
    try {
        const {email} = req.query
        if(!email ){
            res.statusCode = 422
            throw new Error("Por favor, preencha os campos 'name' e 'password' ");   
        }
        const [result] = await connection('usuarios')
        .select('*').where({email})
        res.status(200).send(result)
        
    } catch (error:any) {
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal server error"})
        }else{
            res.send({message: error.message || error.sqlMessage})
        }
    }
}
export default login