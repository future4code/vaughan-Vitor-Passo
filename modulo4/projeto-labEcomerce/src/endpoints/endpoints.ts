import e, { Request, Response } from "express"
import { connection } from "../data/connection";
const { v4: uuidv4 } = require('uuid');
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        let id = uuidv4();
        let name = req.body.name 
        let email = req.body.email
        let password = req.body.password
        if(!name && !email && !password){
            throw new Error("Campos não preenchiddos")
        }
        const newUser = {
            id,
            name,
            email,
            password
        }
        const result = await connection('labecommerce_users')
        .insert(newUser)
        res.status(201).send(result)
    } catch (e: any) {
        switch (e.message) {
            case "Campos não preenchiddos":
                res.status(422).send({message: e.message})
                break;
            default:
                res.status(500).send({message: e.sqlMessage || e.message})
                break;
        }
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const id = uuidv4();
        
    } catch (e: any) {
        switch (e.message) {
            case "value":
                res.status(400).send()
                break;
            default:
                res.status(500).send({message: e.sqlMessage || e.message})
                break;
        }
    }
}

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        
    } catch (e: any) {
        switch (e.message) {
            case "value":
                res.status(400).send()
                break;
            default:
                res.status(500).send({message: e.sqlMessage || e.message})
                break;
        }
    }
}

export const getAllUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection('labecommerce_users')
        .select('*').from('labecommerce_users')
        res.status(201).send(result)
    } catch (e: any) {
        switch (e.message) {
            case "value":
                
                break;
        
            default:
                res.status(500).send({message: e.sqlMessage || e.message})
                break;
        }
    }
}