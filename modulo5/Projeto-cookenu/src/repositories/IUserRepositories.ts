import { User } from "../entities/User";

export interface IUserRepositories {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
