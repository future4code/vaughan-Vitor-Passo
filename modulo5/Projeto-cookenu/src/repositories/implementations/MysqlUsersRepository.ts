import { BaseDatabase } from "../../data/BaseDatabase";
import { User } from "../../entities/User";
import { IUserRepositories } from "../IUserRepositories";

export class MysqlUsersRepository implements IUserRepositories {
  async findByEmail(email: string): Promise<User> {
    const result = await BaseDatabase.connection("usuarios").where({ email });
    return result[0];
  }
  async save(user: User): Promise<any> {
    const createUser = await BaseDatabase.connection("usuarios").insert(user);
    console.log(createUser);
    return createUser;
  }
}
