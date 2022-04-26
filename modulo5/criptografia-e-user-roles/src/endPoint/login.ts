import { Request, Response } from "express";
import { connection } from "../data/connection";

async function login(req: Request, res: Response):Promise<void> {
    try {
        const {email, password} = req.body
        if (!email || !password) {
            res.statusCode = 422;
            throw new Error("Por favor preencha 'email' e 'senha'")
        }
        const [user] = await connection('usuarios').where({email})
        if (!user ) {
            res.statusCode = 401;
            throw new Error("Usuário inexistente")
        }
    } catch (error) {
        
    }
}
export default login