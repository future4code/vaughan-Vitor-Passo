import { Request, Response } from "express";
import { connection } from "../data/connection";
const { v4: uuidv4 } = require("uuid");

export const createProduct = async (req: Request, res: Response) => {
    try {
      let id = uuidv4();
      const { name, image_url, userId } = req.body;
      const price = Number(req.body.price);
      if (!name && !price && !image_url && !userId) {
        throw new Error("Os campos precisam ser preenchidos");
      } else if (!name) {
        throw new Error("O campo name precisa ser preenchido");
      } else if (!price) {
        throw new Error("O campo price precisa ser passado");
      } else if (!image_url) {
        throw new Error("A url da imagem precisa ser preenchido");
      } else if (!userId) {
        throw new Error("O id do usuario precisa ser preenchido");
      }
      const newProduct = {
        id,
        name,
        price,
        image_url,
        userId
      };
      await connection('labecommerce_product').insert(newProduct);
      res.status(201).send(newProduct);
    } catch (e) {
      switch (e.message) {
        case "O campo name precisa ser preenchido":
          res.status(422).send({ message: e.message });
          break;
        case "O campo price precisa ser passado":
          res.status(422).send({ message: e.message });
          break;
        case "O campo imagem precisa ser preenchido":
          res.status(422).send({ message: e.message });
          break;
        default:
          res.status(500).send({ message: e.sqlMessage});
          break;
      }
    }
  };