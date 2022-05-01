import { Request, Response } from "express";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";
import { Authentication } from "../services/Authentication";
import { profile } from "../types/types";

async function getProfile(req: Request, res: Response): Promise<profile> {
  try {
    const token = req.headers.authorization as string;
    if (!token) {
      res.statusCode = 401;
      throw new Error("É nescessário informar o token");
    }
    const mysqlUsersRepository = new MysqlUsersRepository();
    const authentication = new Authentication();
    const tokenData = authentication.getTokenData(token);
    console.log(tokenData);
    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Usuário deslogado");
    }
    const data = await mysqlUsersRepository.returnData(tokenData.id);
    const profile = {
      id: data.id,
      name: data.name,
      email: data.email
    };
    res.status(200).send(profile);
    return profile;
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro ao se conectar com o servidor" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
}
export default getProfile;
