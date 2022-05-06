import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    let order = req.query.order as string
    let search = req.query.search as string
    let column = req.query.s as string
    
    if(!order){
      order = 'desc';
    }
    if (!search) {
      search = '';
    }
    if(!column){
      column = 'name'
    }
    console.log('order',order)
    console.log('search',search)
    const result = await connection('labecommerce_product')
    .select('*').from('labecommerce_product')
    .where('name', 'like', `%${search}%`)
    .orderBy(`${column}`,`${order}`)
    res.status(201).send(result)
  } catch (error) {
    if(error instanceof Error){
      res.status(404).send({error, message:error.message})
  }else{
      res.status(500).send({message: "Unexpected error"})
  }
}
};

