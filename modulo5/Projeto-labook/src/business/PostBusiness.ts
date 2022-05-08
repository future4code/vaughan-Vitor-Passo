import { PostDataBase } from "../data/PostDataBase";
import { IPostData } from "../model/IPostData";
import { Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGeneration } from "../services/IdGeneration";
import { postDTO } from "../types/DTO";
import { likeInfoDTO } from "../types/like";

export class PostBusiness {
  private idGeneration: IdGeneration;
  private authenticator: Authenticator;
  private postData: IPostData;
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

  returnPost = async (id: string, token: string): Promise<Post> => {
    if (!id) {
      throw new Error("É necessário passar o id do post");
    }
    if (!token) {
      throw new Error("É necessário passar o token de acesso");
    }
    const tokenData = await this.authenticator.getTokenData(token);

    if (!tokenData) {
      throw new Error("Usuário deslogado");
    }
    const post = await this.postData.findPostById(id);
    return post;
  };

  listOfPosts = async (token: string): Promise<Post[]> => {
    if (!token) {
      throw new Error("É necessário passar o token de acesso");
    }
    const tokenData = await this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Usuário deslogado");
    }
    const getFriends = await this.postData.friends(tokenData.id);
    if (!getFriends) {
      throw new Error("Feed vazio");
    }
    const getAllPosts = await this.postData.returnPosts(getFriends.friend_id);

    return getAllPosts;
  };

  listOfPostsByType = async (token: string): Promise<Post[]> => {
    if (!token) throw new Error("É preciso passar um token de acesso");
    const tokenData = this.authenticator.getTokenData(token);
    if (!tokenData) throw new Error("Usuário deslogado");

    const getFriends = await this.postData.friends(tokenData.id);
    if (!getFriends) {
      throw new Error("Feed Vazio");
    }
    const allPostsByType = await this.postData.returnPostsByType(
      getFriends.friend_id
    );
    if (allPostsByType.length === 0) {
      throw new Error("Feed Vazio");
    }
    return allPostsByType;
  };

  likingPost = async (info: likeInfoDTO): Promise<void> => {
    const { id, token } = info;
    if (!id) throw new Error("É necessário passar um token para curtir o post");
    if (!token) throw new Error("É preciso passar um token de acesso");

    const tokenData = this.authenticator.getTokenData(token);

    if (!tokenData) throw new Error("Usário Deslogado");
    const getPostById = await this.postData.findPostById(id);
  };
}
