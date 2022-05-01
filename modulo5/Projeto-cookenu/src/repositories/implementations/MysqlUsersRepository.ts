import { BaseDatabase } from "../../data/BaseDatabase";
import { Recipes } from "../../entities/Recipes";
import { User } from "../../entities/User";
import { Authentication } from "../../services/Authentication";
import { HashManager } from "../../services/HashManager";
import { authenticationData, profile } from "../../types/types";
import { IUserRepositories } from "../IUserRepositories";

export class MysqlUsersRepository implements IUserRepositories {
  
  async returnData(id: string): Promise<User> {
    const [result] = await BaseDatabase.connection("cookenu_user").where({id});
    return result;
  }

  async findByEmail(email: string): Promise<User> {
    const [result] = await BaseDatabase.connection("cookenu_user").where({
      email
    });
    return result;
  }

  async save(
    id: string,
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    const hashManager = new HashManager();
    const cypherPassword = hashManager.createHash(password);
    await BaseDatabase.connection("cookenu_user").insert({
      id,
      name,
      email,
      password: cypherPassword
    });
  }

  async returnToken(id: string, role?: string): Promise<string> {
    const authentication = new Authentication();
    const payload: authenticationData = {
      id: id,
      role: role
    };
    const token = authentication.generationToken(payload);
    return token;
  }

  async compareHash(password: string): Promise<boolean> {
    const hashManager = new HashManager();
    const [result] = await BaseDatabase.connection("cookenu_user");
    return hashManager.compareHash(password, result?.password);
  }

  async createRicipes(recipes: Recipes): Promise<void> {
    await BaseDatabase.connection("cookenu_recipes").insert(recipes)
  }
  
}

