import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { user } from "../types/users";
const userBusiness = new UserBusiness();
export class UserControlle {
  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;
      const token = await userBusiness.signup(name, email, password, role);
      res.status(201).send({ message: "Usuário Criado", token });
    } catch (error) {
      if (res.statusCode === 200) {
        res.send({ messagem: error.message || error.sqlMessage });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };
  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await userBusiness.login(email, password);
      res.status(201).send({ token });
    } catch (error) {
      if (res.statusCode === 200) {
        res.send({ message: error.sqlMessage || error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar ao servidor" });
      }
    }
  };

  getAllUser = async (req: Request, res: Response): Promise<user[]> => {
    try {
      const token = req.headers.authorization;
      const users = await userBusiness.getAllUser(token);
      res.status(200).send(users);
      return users;
    } catch (error) {
      if (res.statusCode === 200) {
        res.send({ message: error.sqlMessage || error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization;
      await userBusiness.removeUser(id, token);
      res.send({ message: "Usuário excluído com sucesso" });
    } catch (error) {
      if (res.statusCode === 200) {
        res.send({ message: error.sqlMessage || error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };
}
