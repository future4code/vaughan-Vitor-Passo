import { Request, Response } from "express";
import { v4 } from "uuid";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";

export class CreateUserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw new Error(
          "Por favor, preencha os campos 'name', 'email', 'password' "
        );
      }
      const mysqlUsersRepository = new MysqlUsersRepository();
      const findByEmail = await mysqlUsersRepository.findByEmail(email);
      console.log(findByEmail);
      if (findByEmail) {
        throw new Error("Usuário Já Cadastrado");
      }
      const id = v4();
      const createUser = mysqlUsersRepository.save(id, name, email, password);
      console.log(createUser);
      return res.status(201).send({ message: `Seja bem vindo, ${name}!` });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
}
