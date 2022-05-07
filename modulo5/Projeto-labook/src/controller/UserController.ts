import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { Post } from "../model/Post";
import { followUserDTO, loginDTO, signupDto } from "../types/DTO";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  signup = async (req: Request, res: Response): Promise<string> => {
    const { name, email, password } = req.body;
    const input: signupDto = {
      name,
      email,
      password
    };
    try {
      const token = await this.userBusiness.signup(input);
      res.status(201).send({ message: "Usuário criado com sucesso", token });
      return token;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  login = async (req: Request, res: Response): Promise<string> => {
    try {
      const { email, password } = req.body;
      const sendLogin: loginDTO = {
        email,
        password
      };

      const token = await this.userBusiness.login(sendLogin);
      res.status(200).send({ token });
      return token;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  followUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.body;
      const token = req.headers.authorization;
      const sendInfoForFollowUser = {
        id,
        token
      };
      await this.userBusiness.doingNewFrind(sendInfoForFollowUser);

      res.status(200).send({ message: "Parabéns você tem um novo amigo" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  unfollowUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.body;
      const token = req.headers.authorization;
      const sendInfoForFollowUser = {
        id,
        token
      };
      await this.userBusiness.removeFriend(sendInfoForFollowUser);

      res.status(200).send({ message: "Você removeu um amigo" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  feed = async (req: Request, res: Response): Promise<Post[]> => {
    try {
      const token = req.headers.authorization;
      const posts: Post[] = await this.userBusiness.listOfPosts(token);
      res.status(200).send({ posts });
      return posts;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  feedByType = async (req: Request, res: Response): Promise<Post[]> => {
    try {
      const token = req.headers.authorization;
      const newFeed: Post[] = await this.userBusiness.listOfPostsByType(token);
      res.status(200).send({ newFeed });
      return newFeed;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }

    return;
  };
}
