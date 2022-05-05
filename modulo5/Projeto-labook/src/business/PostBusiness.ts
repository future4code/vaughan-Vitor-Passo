import { PostDataBase } from "../data/PostDataBase";
import { IPostData } from "../model/IPostData";
import { Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGeneration } from "../services/IdGeneration";
import { postDTO } from "../types/DTO";

export class PostBusiness {
  private idGeneration: IdGeneration;
  private authenticator: Authenticator;
  private postData: PostDataBase;
  constructor(userRepository: PostDataBase) {
    this.idGeneration = new IdGeneration();
    this.authenticator = new Authenticator();
    this.postData = userRepository;
  }
  addPost = async (post: postDTO): Promise<void> => {
    const { photo, description, type, token } = post;
    if (!photo || !description || !type) {
      throw new Error(
        "Por favor, preencha os campos 'photo', 'description' e 'type'"
      );
    }
    if (!token) {
      throw new Error("Você não tem autorização para criar um post");
    }

    const tokenData = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Usuário deslogado!");
    }
    const { id } = tokenData;

    const time = new Date();
    const post_id = this.idGeneration.generationId();
    const addPostInDataBase: Post = {
      id: post_id,
      photo,
      time: time,
      description,
      type,
      user_id: id
    };

    await this.postData.insertPost(addPostInDataBase);
  };
}
