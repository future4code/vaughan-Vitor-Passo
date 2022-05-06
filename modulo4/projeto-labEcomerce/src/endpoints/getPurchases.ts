import { Request, Response} from "express"
import { connection } from "../data/connection"
export const getPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const user_id = req.params.user_id
        const result = await connection('labecommerce_purchases')
        .select('*').from('labecommerce_purchases')
        .where('id', user_id)
        res.status(201).send(result)
    } catch (e: any) {
        
    }
}