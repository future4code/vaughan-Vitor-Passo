import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";
import { Authentication } from "../services/Authentication";
import { Uuid } from "../services/Id";
import { profile } from "../types/types";

export class FollowProfilleController {
  async followUser(req: Request, res: Response): Promise<void> {
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
      const mysqlUsersRepository = new MysqlUsersRepository();
      const getTokenData = new Authentication();
      const tokenData = getTokenData.getTokenData(token);
      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Usuário Deslogado!");
      }
      const followUser = await mysqlUsersRepository.returnFollowUser(user_id);
      console.log(followUser);
      res.status(201).send({ message: "Followed successfully" });
    } catch (error) {
      if (res.statusCode === 200) {
        res.send({ message: error.sqlMessage || error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  }
}
