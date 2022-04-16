import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await connection('labecommerce_product')
    console.log(result)
    res.status(201).send(result)

  } catch (e) {
    switch (e.message) {
      case "value":
        res.status(400).send();
        break;
      default:
        res.status(500).send({ message: e.sqlMessage});
        break;
    }
  }
};

