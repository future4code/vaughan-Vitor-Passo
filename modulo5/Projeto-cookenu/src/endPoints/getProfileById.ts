import { Request, Response } from "express";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";

export async function getProfileById(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    if (!userId) {
      res.statusCode = 401;
      throw new Error("É preciso passar um params");
    }
    const mysqlUsersRepository = new MysqlUsersRepository();
    const user = await mysqlUsersRepository.returnProfile(userId);
    const { id, name, email } = user;
    res.status(200).send({ id, name, email });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro ao se conectar com o servidor" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
}
