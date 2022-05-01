import { Request, Response } from "express";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";
import { profile } from "../types/types";

async function getProfile(req: Request, res: Response): Promise<profile> {
  try {
    const token = req.headers.authorization as string;
    if (!token) {
      res.statusCode = 401;
      throw new Error("É nescessário informar o token");
    }
    const mysqlUsersRepository = new MysqlUsersRepository();
    const data = await mysqlUsersRepository.returnData();
    const profile = {
      id: data.id,
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
