import { IUserData } from "../model/IUserData";
import { Post } from "../model/Post";
import { User } from "../model/User";
import { followUserDTO } from "../types/DTO";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase implements IUserData {
  returnPosts(friend_id: string): Promise<Post[]> {
    throw new Error("Method not implemented.");
  }
  async removeFollow(friend_id: string): Promise<void> {
    const tableName = "labebook_friends";
    const searchFollow = await this.connection(tableName).delete().where({
      friend_id
    });
  }
  async findFollowId(friend_id: string): Promise<boolean> {
    const tableName = "labebook_friends";
    const [searchFollow] = await this.connection(tableName).where({
      friend_id
    });
    return searchFollow;
  }
  findUserByEmail = async (email: string): Promise<User> => {
    const tableName = "labebook_users";
    const [user] = await this.connection(tableName).where({ email });
    return user;
  };

  insertUser = async (user: User) => {
    const tableName = "labebook_users";
    await this.connection(tableName).insert(user);
  };

  insertNewFriend = async (followInfos: followUserDTO): Promise<void> => {
    const tableName = "labebook_friends";
    await this.connection(tableName).insert(followInfos);
  };
}
