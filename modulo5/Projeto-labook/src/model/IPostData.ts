import { friend } from "../types/friend";
import { Post } from "./Post";

export interface IPostData {
  findPostById(id: string): Promise<Post>;
  insertPost(post: Post): void;
  returnPostsByType(user_id: string): Promise<Post[]>;
  returnPosts(user_id: string): Promise<Post[]>;
  friends(user_id: string): Promise<friend>;
}
