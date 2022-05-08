import { IUserData } from "../model/IUserData";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGeneration } from "../services/IdGeneration";
import { authenticationData } from "../types/authenticationData";
import {
  crendentialDTO,
  followingUserDTO,
  followUserInfo,
  loginDTO,
  signupDto
} from "../types/DTO";

export class UserBusiness {
  private userData: IUserData;
  private idGeneration: IdGeneration;
  private hashPassword: HashManager;
  private authenticator: Authenticator;
  constructor(userRepository: IUserData) {
    this.userData = userRepository;
    this.idGeneration = new IdGeneration();
    this.hashPassword = new HashManager();
    this.authenticator = new Authenticator();
  }
  signup = async (input: signupDto): Promise<string> => {
    const { name, email, password } = input;
    if (!name || !email || !password) {
      throw new Error(
        "Por favor, preencha os campos 'name', 'email' e 'password' "
      );
    }
    if (email.indexOf("@") === -1) {
      throw new Error(
        "O email não está com o formato correto, por favor coloque '@'"
      );
    }
    if (password.length < 8) {
      throw new Error("A senha tem que ter no mínimo 8 caractéres");
    }
    const verifyExistUser = await this.userData.findUserByEmail(email);
    if (verifyExistUser) {
      throw new Error("Usuário já existe");
    }

    const id = this.idGeneration.generationId();
    const newPassword = this.hashPassword.createHash(password);
    const user: User = {
      id,
      name,
      email,
      password: newPassword
    };
    const payload: authenticationData = {
      id
    };
    this.userData.insertUser(user);

    const token = this.authenticator.generationToken(payload);
    return token;
  };
  login = async (login: loginDTO): Promise<string> => {
    const { email, password } = login;
    if (!email || !password) {
      throw new Error("Por favor, preencha os campos 'email' e 'password'");
    }

    const user = await this.userData.findUserByEmail(email);

    if (!user) {
      throw new Error("Credenciais inválidas");
    }
    const isPassword = this.hashPassword.compareHash(password, user.password);
    if (!isPassword || !user) {
      throw new Error("Credenciais inválidas");
    }
    const payload: authenticationData = {
      id: user.id
    };
    const token = this.authenticator.generationToken(payload);
    return token;
  };
  doingNewFrind = async (followInfos: crendentialDTO): Promise<void> => {
    const { id, token } = followInfos;
    if (!id) {
      throw new Error(
        "É necessário passar um id de quem você deseja fazer uma amizade"
      );
    }
    if (!token) {
      throw new Error("É necessário informar o token de acesso!");
    }

    const tokenData = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Usuário deslogado");
    }
    if (id === tokenData.id) {
      throw new Error("Não é possível fazer amizade consigo");
    }
    const isVerifyId: boolean = await this.userData.findFollowId(id);

    if (isVerifyId) {
      throw new Error("Você já segue esse usuário");
    }
    const following: followingUserDTO = {
      user_id: tokenData.id,
      friend_id: id
    };

    this.userData.insertNewFriend(following);
  };

  removeFriend = async (followInfos: crendentialDTO): Promise<void> => {
    const { id, token } = followInfos;
    if (!id) {
      throw new Error(
        "É necessário passar um id de quem você deseja desfazer uma amizade"
      );
    }
    if (!token) {
      throw new Error("É necessário informar o token de acesso!");
    }

    const tokenData = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Usuário deslogado");
    }
    const isVerifyId = await this.userData.findFollowId(id);

    if (!isVerifyId) {
      throw new Error("Esse id não existe na sua lista de amigos");
    }

    await this.userData.removeFollow(id);
  };
}
