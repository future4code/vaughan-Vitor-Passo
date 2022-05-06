import { followUserDTO } from "../types/DTO";
import { Post } from "./Post";
import { User } from "./User";

export interface IUserData {
  findUserByEmail(email: string): Promise<User>;
  insertUser(user: User): void;
  insertNewFriend(follow: followUserDTO): void;
  findFollowId(friend_id: string): Promise<boolean>;
  removeFollow(friend_id: string): Promise<void>;
  friends(user_id: string): Promise<any>;
  returnPosts(friend_id: string): Promise<Post[]>;
}
