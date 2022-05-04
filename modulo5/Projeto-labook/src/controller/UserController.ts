import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { loginDTO, signupDto } from "../types/DTO";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  signup = async (req: Request, res: Response): Promise<string> => {
    const { name, email, password } = req.body;
    const input: signupDto = {
      name,
      email,
      password
    };
    try {
      const token = await this.userBusiness.signup(input);
      res.status(201).send({ message: "Usuário criado com sucesso", token });
      return token;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  login = async (req: Request, res: Response): Promise<string> => {
    try {
      const { email, password } = req.body;
      const sendLogin: loginDTO = {
        email,
        password
      };

      const token = await this.userBusiness.login(sendLogin);
      res.status(200).send({ token });
      return token;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };
}
