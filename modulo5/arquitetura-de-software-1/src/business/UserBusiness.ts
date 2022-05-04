import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGeneration } from "../services/IdGeneration";
import { user, USER_ROLES } from "../types/users";
const idGenerator = new IdGeneration();
const hashManager = new HashManager();
const userDb = new UserDataBase();
const authentication = new Authenticator();
export class UserBusiness {
  signup = async (
    name: string,
    email: string,
    password: string,
    role?: USER_ROLES
  ) => {
    if (!name || !email || !password) {
      throw new Error('Preencha os campos "name","email" e "password"');
    }
    const user: user = await userDb.selectUserByEmail(email);
    if (user) {
      throw new Error("Usuário já cadastrado");
    }
    const id = idGenerator.generationId();
    const cypherPassword = hashManager.createHash(password);
    await userDb.insertUser({
      id,
      name,
      email,
      password: cypherPassword,
      role
    });
    const token: string = authentication.generationToken({
      id,
      role: role
    });
    return token;
  };

  login = async (email: string, password: string) => {
    if (!email && !password) {
      throw new Error("'email' e 'senha' são obrigatórios");
    }
    const user: user = await userDb.selectUserByEmail(email);

    const cypherPassword: boolean = hashManager.compareHash(
      password,
      user.password
    );
    if (!cypherPassword) {
      throw new Error("Usuário ou senha inválidos");
    }
    const payload = {
      id: user.id,
      role: user.role
    };
    const token: string = authentication.generationToken(payload);
    return token;
  };

  getAllUser = async (token: string) => {
    if (!token) {
      throw new Error("É necessário passar um token");
    }
    const authentication = new Authenticator();
    const tokenData = authentication.getTokenData(token);
    if (!tokenData) {
      throw new Error("Usuário deslogado!");
    }
    const returnUsers = await userDb.returnAllUser();
    return returnUsers;
  };

  removeUser = async (id: string, token: string) => {
    if (!id) {
      throw new Error("É necessário passar o id da pessoa que deseja excluir");
    }
    if (!token) {
      throw new Error("É nescessário passar um token de acesso");
    }

    const authentication = new Authenticator();
    const tokenData = authentication.getTokenData(token);

    if (tokenData.role !== "ADMIN") {
      throw new Error("Você não tem permissão para apagar um usuário");
    }
    if (!tokenData) {
      throw new Error("Usuário deslogado");
    }
    await userDb.deleteUser(id);
  };
}
