import { authenticationData, user } from "../types/users";
import { BaseDataBase } from "./BaseDatabase";

export class UserDataBase extends BaseDataBase {
  insertUser = async (user: user) => {
    await this.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
      })
      .into("usuarios");
  };

  selectUserByEmail = async (email: string): Promise<user> => {
    const [user] = await this.connection("usuarios").where({ email });
    return user;
  };
  returnAllUser = async (): Promise<user[]> => {
    const users = await this.connection("usuarios");
    console.log("ellen eu te amoooo", users);
    return users;
  };
  deleteUser = async (id: string) => {
    await this.connection("usuarios").delete("*").where({ id });
  };
}
