import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authentication } from "../services/Authentication";

export async function getRecipeById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const id = req.params.id;
    const token = req.headers.authorization;
    if (!id) {
      res.statusCode = 401;
      throw new Error("É necessário que passa o id");
    }
    if (!token) {
      res.statusCode = 401;
      throw new Error("É necessário passar o token de acesso");
    }
    const getToken = new Authentication();
    const tokenData = getToken.getTokenData(token);
    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Usuário deslogado");
    }
    const [result] = await BaseDatabase.connection("cookenu_recipes").where({
      id
    });
    res.status(200).send(result);
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro ao conectar ao servidor" });
    } else {
      res.send({ message: error.message || error.sqlMessage });
    }
  }
}
