import { Post } from "./Post";

export interface IPostData {
  // findUserByEmail(email: string): Promise<User>;
  insertPost(post: Post): void;
}
