import { User } from "../entities/User";

export interface IUserRepositories {
  findByEmail(email: string): Promise<User>;
  save(
    id: string,
    name: string,
    email: string,
    password: string
  ): Promise<void>;
}
