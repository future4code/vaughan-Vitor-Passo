import { Request, response, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUsesUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw new Error(
          "Por favor, preencha os campos 'name', 'email', 'password' "
        );
      }
      await this?.createUsesUseCase.execute({
        name,
        email,
        password
      });

      return res.status(201).send({ message: `Seja bem vindo, ${name}!` });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
}
