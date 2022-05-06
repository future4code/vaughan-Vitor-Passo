import { IUserData } from "../model/IUserData";
import { Post } from "../model/Post";
import { User } from "../model/User";
import { followUserDTO } from "../types/DTO";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase implements IUserData {
  // returnPosts(friend_id: string, user_id: string): Promise<Post[] | any[]> {
  //   const tableName1: any = "labebook_friends";
  //   const tableName = "labebook_posts";
  // const results = this.connection.raw(`
  // select * from labebook_posts p join labebook_friends po on po."${friend_id}" = "${user_id}"
  // `);friend_id: string, user_id: string
  // const compare = (a: string, b: string) =>{
  //   return friend_id === user_id
  // }
  // const results = this.connection()
  //   .select("*")
  //   .from(tableName)
  //   const results = this.connection.raw(
  //     `select * from labebook_posts join labebook_friends on "${friend_id}" = "${user_id}"`
  //   );
  //   return results;
  // }
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
  async friends(user_id: string): Promise<any> {
    const tableName = "labebook_friends";
    const [searchFollow] = await this.connection(tableName).where({ user_id });
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

  returnPosts = async (user_id: string): Promise<Post[]> => {
    const tableName = "labebook_posts";
    const resuls = await this.connection(tableName).where({ user_id });
    return resuls;
  };
}
