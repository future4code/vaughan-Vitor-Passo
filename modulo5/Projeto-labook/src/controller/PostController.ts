import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { Post } from "../model/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}
  createPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const { photo, description, type } = req.body;
      const token = req.headers.authorization;
      const createPost = {
        photo,
        description,
        type,
        token
      };

      await this.postBusiness.addPost(createPost);

      res.status(201).send({ message: "Post criado com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  getPostById = async (req: Request, res: Response): Promise<Post> => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization;
      const post = await this.postBusiness.returnPost(id, token);
      res.status(200).send({ post });
      return post;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      } else
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
    }
  };
}
