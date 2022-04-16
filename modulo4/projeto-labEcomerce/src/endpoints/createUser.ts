import { Request, Response } from "express";
import { connection } from "../data/connection";
const { v4: uuidv4 } = require("uuid");

export const createUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = uuidv4();
      const {name, email, password} = req.body
      if (!name && !email && !password) {
        throw new Error("Campos não preenchiddos");
      } else if (!name) {
        throw new Error("O campo name precisa ser preenchido");
      } else if (!email) {
        throw new Error("O campo email precisa ser passado");
      } else if (!password) {
        throw new Error("O campo password precisa ser preenchido");
      }
      const newUser = {
        id,
        name,
        email,
        password
      };
      await connection("labecommerce_users").insert(newUser);
      //Nao sei se é a melhor forma, mas achei bonito de ter dois objetos um data e outro message
      res.status(201).send({
        user: [newUser],
        message: "Usuário Cadastrado Com Sucesso"
      });
    } catch (e) {
      switch (e.message) {
        case "Campos não preenchiddos":
          res.status(422).send({ message: e.message });
          break;
        case "O campo name precisa ser preenchido":
          res.status(422).send({ message: e.message });
          break;
        case "O campo email precisa ser passado":
          res.status(422).send({ message: e.message });
          break;
        case "O campo password precisa ser preenchido":
          res.status(422).send({ message: e.message });
          break;
        default:
          res.status(500).send({ message: e.sqlMessage});
          break;
      }
    }
  };
  