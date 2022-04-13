import { Request, Response } from "express"
export const createUser = async (req: Request, res: Response) => {
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

export const createProduct = async (req: Request, res: Response) => {
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