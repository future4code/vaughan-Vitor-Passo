import { User } from "./User";

export interface IUserData {
  findUserByEmail(email: string): Promise<User>;
  insertUser(user: User): void;
}
