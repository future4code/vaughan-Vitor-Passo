import { followUserDTO } from "../types/DTO";
import { User } from "./User";

export interface IUserData {
  findUserByEmail(email: string): Promise<User>;
  insertUser(user: User): void;
  insertNewFriend(follow: followUserDTO): void;
  findFollowId(friend_id: string): Promise<boolean>;
}
