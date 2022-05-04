import { IUserData } from "../model/IUserData";
import { User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase implements IUserData {
  findUserByEmail = async (email: string): Promise<User> => {
    const tableName = "labebook_users";
    const [user] = await this.connection(tableName).where({ email });
    return user;
  };

  insertUser = async (user: User) => {
    const tableName = "labebook_users";
    await this.connection(tableName).insert(user);
  };
}
