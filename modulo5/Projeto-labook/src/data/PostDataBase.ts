import { IPostData } from "../model/IPostData";
import { Post } from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase {
  insertPost = async (post: Post): Promise<void> => {
    const tableName = "labebook_posts";
    await this.connection(tableName).insert(post);
  };
}
