import { IPostData } from "../model/IPostData";
import { Post } from "../model/Post";
import { like, likeInthePostDTO } from "../types/DTO";
import { friend } from "../types/friend";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase implements IPostData {
  findPostById = async (id: string): Promise<Post> => {
    const tableName = "labebook_posts";
    const post = await this.connection(tableName).where({ id });
    return post[0];
  };
  insertPost = async (post: Post): Promise<void> => {
    const tableName = "labebook_posts";
    await this.connection(tableName).insert(post);
  };

  friends = async (user_id: string): Promise<friend> => {
    const tableName = "labebook_friends";
    const [searchFollow] = await this.connection(tableName).where({ user_id });
    console.log("eu amo a ellen", [searchFollow]);
    return searchFollow;
  };
  returnPosts = async (user_id: string): Promise<Post[]> => {
    const tableName = "labebook_posts";
    const resuls = await this.connection(tableName).where({ user_id });
    return resuls;
  };
  returnPostsByType = async (user_id: string): Promise<Post[]> => {
    const tableName = "labebook_posts";
    const resuls = await this.connection(tableName)
      .where("user_id", "=", `${user_id}`)
      .where("type", "=", "EVENTO");
    return resuls;
  };

  likeInThePostDataBase = async (
    likeInfosInThePost: likeInthePostDTO
  ): Promise<void> => {
    const tableName = "labebook_like";
    await this.connection(tableName).insert(likeInfosInThePost);
  };

  getLikeById = async (post_id: string): Promise<like> => {
    const tableName = "labebook_like";
    const [returnLikeById] = await this.connection(tableName).where({
      post_id
    });
    console.log("Tem que respeitar a caila", returnLikeById);
    return returnLikeById;
  };
}
