import { Post } from "./Post";

export interface IPostData {
  findPostById(id: string): Promise<Post>;
  insertPost(post: Post): void;
}
