import { Request, Response } from "express";
import { v4 } from "uuid";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";
import { Authentication } from "../services/Authentication";
import { authenticationData } from "../types/types";

export class CreateUserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      const role: string = req.body.role;
      if (!name || !email || !password) {
        throw new Error(
          "Por favor, preencha os campos 'name', 'email', 'password' "
        );
      }
      if (email.indexOf("@") === -1) {
        throw new Error(
          "Por favor, insira o email no formato correto. Verifica-se está com '@'."
        );
      }

      if (password.length < 6) {
        throw new Error(
          "Por favor, insira uma senha com pelo menos 6 caractéries"
        );
      }

      const mysqlUsersRepository = new MysqlUsersRepository();
      const findByEmail = await mysqlUsersRepository.findByEmail(email);

      if (findByEmail) {
        throw new Error("Usuário Já Cadastrado");
      }
      const id = v4();
      mysqlUsersRepository.save(id, name, email, password);
      const token = await mysqlUsersRepository.returnToken(id, role);
      return res.status(201).send({ token: token });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
}
