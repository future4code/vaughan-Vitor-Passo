import { BaseDatabase } from "../../data/BaseDatabase";
import { User } from "../../entities/User";
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
    await BaseDatabase.connection("usuarios").insert({
      id,
      name,
      email,
      password
    });
  }
}
