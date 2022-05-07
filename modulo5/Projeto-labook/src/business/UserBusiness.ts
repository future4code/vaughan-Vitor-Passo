import { UserDataBase } from "../data/UserDataBase";
import { IUserData } from "../model/IUserData";
import { Post } from "../model/Post";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGeneration } from "../services/IdGeneration";
import { authenticationData } from "../types/authenticationData";
import {
  followUserDTO,
  followUserInfo,
  loginDTO,
  signupDto
} from "../types/DTO";
import { likeInfo } from "../types/like";

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
    const isPassword = this.hashPassword.compareHash(password, user.password);

    if (!isPassword) {
      throw new Error("Senha incorreta");
    }
    const payload: authenticationData = {
      id: user.id
    };
    const token = this.authenticator.generationToken(payload);
    return token;
  };
  doingNewFrind = async (followInfos: followUserInfo): Promise<void> => {
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
    const following: followUserDTO = {
      user_id: tokenData.id,
      friend_id: id
    };
    this.userData.insertNewFriend(following);
  };

  removeFriend = async (followInfos: followUserInfo) => {
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
