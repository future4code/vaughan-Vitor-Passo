import { Recipes } from "../entities/Recipes";
import { User } from "../entities/User";

export interface IUserRepositories {
  findByEmail(email: string): Promise<User>;
  save(
    id: string,
    name: string,
    email: string,
    password: string
  ): Promise<void>;

  returnToken(id: string, role: string): Promise<string>;

  compareHash(password: string): Promise<boolean>;

  returnData(token: string): Promise<User>;

  returnProfile(id: string): Promise<User>;

  returnFollowUser(id: string): Promise<void>;

  createRicipes(recipes: Recipes): Promise<void>;
}
