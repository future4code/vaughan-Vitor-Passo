import { IPostData } from "../model/IPostData";
import { Post } from "../model/Post";
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
}
