import { IPostData } from "../model/IPostData";
import { Post } from "../model/Post";
import { like, likeInthePostDTO } from "../types/DTO";
import { friend } from "../types/friend";
import { deslikeInfoDTO, deslikingPostDTO } from "../types/like";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase implements IPostData {
  findPostById = async (id: string): Promise<Post> => {
    const tableName: string = "labebook_posts";
    const post = await this.connection(tableName).where({ id });
    return post[0];
  };

  insertPost = async (post: Post): Promise<void> => {
    const tableName: string = "labebook_posts";
    await this.connection(tableName).insert(post);
  };

  friends = async (user_id: string): Promise<friend> => {
    const tableName: string = "labebook_friends";
    const [searchFollow] = await this.connection(tableName).where({ user_id });
    return searchFollow;
  };

  returnPosts = async (user_id: string): Promise<Post[]> => {
    const tableName: string = "labebook_posts";
    const resuls = await this.connection(tableName).where({ user_id });
    return resuls;
  };

  returnPostsByType = async (user_id: string): Promise<Post[]> => {
    const tableName: string = "labebook_posts";
    const resuls = await this.connection(tableName)
      .where("user_id", "=", `${user_id}`)
      .where("type", "=", "EVENTO");
    return resuls;
  };

  likeInThePostDataBase = async (
    likeInfosInThePost: likeInthePostDTO
  ): Promise<void> => {
    const tableName: string = "labebook_like";
    await this.connection(tableName).insert(likeInfosInThePost);
  };

  deslikeInThePost = async (infoDeslike: deslikingPostDTO): Promise<void> => {
    const { post_id, user_id } = infoDeslike;
    const tableName: string = "labebook_like";
    await this.connection(tableName).delete().where({ post_id });
  };

  getLikeById = async (post_id: string): Promise<like> => {
    const tableName: string = "labebook_like";
    const [returnLikeById] = await this.connection(tableName).where({
      post_id
    });

    return returnLikeById;
  };
}
