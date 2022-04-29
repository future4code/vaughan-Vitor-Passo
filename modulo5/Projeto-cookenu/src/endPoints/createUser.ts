import { Request, Response } from "express";
import { v4 } from "uuid";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";

export class CreateUserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      const role: string = req.body.role;
      if (!name || !email || !password) {
        res.statusCode = 422;
        throw new Error(
          "Por favor, preencha os campos 'name', 'email', 'password' "
        );
      }
      if (email.indexOf("@") === -1) {
        res.statusCode = 401;
        throw new Error(
          "Por favor, insira o email no formato correto. Verifica-se está com '@'."
        );
      }

      if (password.length < 6) {
        res.statusCode = 401;
        throw new Error(
          "Por favor, insira uma senha com pelo menos 6 caractéries"
        );
      }

      const mysqlUsersRepository = new MysqlUsersRepository();
      const findByEmail = await mysqlUsersRepository.findByEmail(email);

      if (findByEmail) {
        res.statusCode = 401;
        throw new Error("Usuário Já Cadastrado");
      }
      const id = v4();
      mysqlUsersRepository.save(id, name, email, password);
      const token = await mysqlUsersRepository.returnToken(id, role);
      return res.status(201).send({ token: token });
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      } else {
        res.send({ message: error.sqlMessage || error.message });
      }
    }
  }
}
