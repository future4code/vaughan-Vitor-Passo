import { IPostData } from "../model/IPostData";
import { Post } from "../model/Post";
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

  async friends(user_id: string): Promise<friend> {
    const tableName = "labebook_friends";
    const [searchFollow] = await this.connection(tableName).where({ user_id });
    return searchFollow;
  }
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
}
