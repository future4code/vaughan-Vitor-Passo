import { BaseDatabase } from "../../data/BaseDatabase";
import { User } from "../../entities/User";
import { Authentication } from "../../services/Authentication";
import { HashManager } from "../../services/HashManager";
import { authenticationData } from "../../types/types";
import { IUserRepositories } from "../IUserRepositories";

export class MysqlUsersRepository implements IUserRepositories {
  async findByEmail(email: string): Promise<User> {
    const result = await BaseDatabase.connection("usuarios").where({ email });
    return result[0];
  }

  async save(
    id: string,
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    const hashManager = new HashManager();
    const cypherPassword = hashManager.createHash(password);
    await BaseDatabase.connection("usuarios").insert({
      id,
      name,
      email,
      password: cypherPassword
    });
  }
  async returnToken(id: string, role: string): Promise<string> {
    const authentication = new Authentication();
    const payload: authenticationData = {
      id: id,
      role: role
    };
    const token = authentication.generationToken(payload);
    console.log(token);
    return token;
  }
}
