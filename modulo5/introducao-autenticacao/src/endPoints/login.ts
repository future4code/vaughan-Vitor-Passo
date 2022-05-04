import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authentication } from "../services/Authentication";
import getEmail from "./getEmail";

async function login(req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body
        if(!email || !password){
            res.statusCode = 422
            throw new Error("Por favor, preencha os campos 'email' e 'password' ");
        }
        
        const user = await getEmail(email)
        if(user.password !== password){
            throw new Error("Senha errada!");
        }
        const authentication = new Authentication
        const generationToken = authentication.generationToken
        const token = generationToken({
            id: user.id
        });
        res.status(200).send({token: token})
        
    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal server error"})
        }else{
            res.send({message: error.message || error.sqlMessage})
        }
    }
}

export default login