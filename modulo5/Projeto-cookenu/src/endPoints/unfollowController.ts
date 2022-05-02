import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authentication } from "../services/Authentication";

export async function unfollow(req: Request, res: Response): Promise<void> {
  try {
    const { user_id } = req.body;
    const token = req.headers.authorization as string;
    if (!user_id) {
      res.statusCode = 401;
      throw new Error("É preciso passar o id do usuário que deseja seguir");
    }
    if (!token) {
      res.statusCode = 401;
      throw new Error("É necessário passar o token de acesso");
    }
    const getTokenData = new Authentication();
    const tokenData = getTokenData.getTokenData(token);
    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Usuário Deslogado!");
    }
    await BaseDatabase.connection("cookenu_follow").delete().where({ user_id });
    res.status(200).send({ message: "Unfollowed successfully" });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro ao se conectar com o servidor" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
}
