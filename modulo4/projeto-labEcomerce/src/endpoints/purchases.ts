import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../data/connection";
export const purchases = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = uuidv4();
    const { userId, productId} = req.body;
    let quantity = Number(req.body.quantity);
    const price = await connection("labecommerce_product")
      .select("price")
      .from("labecommerce_product")
      .where("id", productId);
    const total_price = quantity * price[0].price;
    const register = {
      id,
      userId,
      productId,
      quantity,
      total_price
    }
    await connection('labecommerce_purchases')
    .insert(register);
    res.status(201).send(register);
  } catch (e) {
    switch (e.message) {
      case "value":
        break;
      default:
        res.status(500).send({ message: e.sqlMessage });
        break;
    }
  }
};
