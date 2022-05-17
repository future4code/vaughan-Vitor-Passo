import { Request, Response } from "express";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";

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
      const id = (await mysqlUsersRepository.findByEmail(email)).id;
      const role = (await mysqlUsersRepository.findByEmail(email)).role;

      if (!mysqlUsersRepository) {
        res.statusCode = 401;
        throw new Error("Usuário inválido!");
      }
      const comparePassword = await mysqlUsersRepository.compareHash(password);
      if (!comparePassword) {
        res.statusCode = 401;
        throw new Error("Senha inválida");
      }

      const token = await mysqlUsersRepository.returnToken(id, role);
      res.status(200).send({ token: token });
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: "Erro ao se conectar ao servidor!" });
      } else {
        res.send({ message: error.sqlMessage || error.message });
      }
    }
  }
}
