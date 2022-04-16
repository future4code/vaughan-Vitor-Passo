import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await connection('labecommerce_product')
    res.status(201).send(result)
  } catch (error) {
    if(error instanceof Error){
      res.status(404).send({error, message:error.message})
  }else{
      res.status(500).send({message: "Unexpected error"})
  }
}
};

