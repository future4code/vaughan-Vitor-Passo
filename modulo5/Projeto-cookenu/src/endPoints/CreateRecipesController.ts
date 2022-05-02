import { Request, Response } from "express";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";
import { Authentication } from "../services/Authentication";
import { Uuid } from "../services/Id";

export class CreteRecipesController {
  async createRecipe(req: Request, res: Response): Promise<void> {
    try {
      const token = req.headers.authorization as string;
      if (!token) {
        res.statusCode = 401;
        throw new Error("É necessário passar o token de acesso");
      }
      const getTokenData = new Authentication();
      const tokenData = getTokenData.getTokenData(token);
      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Usuário deslogado!");
      }
      const { title, description } = req.body;
      if (!title || !description) {
        res.statusCode = 401;
        throw new Error(
          "Os campos 'title', 'description' precisam ser preenchidos"
        );
      }
      const creationDate = new Date();
      const getId = new Uuid();
      const id = getId.gerationId();
      const recipes = {
        id,
        title,
        description,
        creationDate,
        user_id: tokenData.id
      };
      const mysqlUsersRepository = new MysqlUsersRepository();
      await mysqlUsersRepository.createRicipes(recipes);

      res.status(201).send({ recipes: recipes });
    } catch (error) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: "Erro ao conectar ao servidor" });
      } else {
        res.send({ message: error.message || error.sqlMessage });
      }
    }
  }
}
