import { Request, Response } from "express";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";
import { HashManager } from "../services/HashManager";

export class LoginController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.statusCode = 422;
        throw new Error("Por favor, preencha os campos 'email' e 'password' ");
      }
      const mysqlUsersRepository = new MysqlUsersRepository();
      mysqlUsersRepository.findByEmail(email);
      if (!mysqlUsersRepository) {
        res.statusCode = 401;
        throw new Error("Usuário inválido!");
      }
      const comparePassword = await mysqlUsersRepository.compareHash(password);
      console.log(comparePassword);
      console.log(password);
      if (!comparePassword) {
        throw new Error("Senha inválida");
      }
      const user = await mysqlUsersRepository.returnData();
      const token = await mysqlUsersRepository.returnToken(user.id);
      res.status(200).send({ token: token });
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: "Erro ao se conectar ao servidor!" });
      } else {
        res.send({ message: error.message });
      }
    }
  }
}
