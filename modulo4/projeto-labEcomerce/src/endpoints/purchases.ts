import { Request, Response} from "express"
import { v4 as uuidv4 } from 'uuid';
export const purchases =async (req: Request, res: Response): Promise<void> => {
    try {
        const id = uuidv4()
        const {user_id, product_id} = req.body

        let quantify = Number(req.body.quantify)
    
        const total_price = quantify * product_id
        console.log(total_price)
    } catch (e: any) {
        switch (e.message) {
            case "value":
                break;
        
            default:
                res.status(500).send({message: e.sqlMessage})
                break;
        }
    }
}