import { types } from "./ENUM";

export type signupDto = {
  name: string;
  email: string;
  password: string;
};

export type loginDTO = {
  email: string;
  password: string;
};

export type postDTO = {
  photo: string;
  description: string;
  type: types;
  token: string;
};

export type followingUserDTO = {
  user_id: string;
  friend_id: string;
};
export type followUserInfo = {
  id: string;
  token: string;
};

export type crendentialDTO = {
  id: string;
  token: string;
};

export type likeInthePostDTO = {
  post_id: string;
  user_id: string;
};

export type like = {
  user_id: string;
};

export type crendentialToTheCommentDTO = {
  id: string;
  token: string;
  message: string;
};

export type infosTheCommentDTO = {
  post_id: string;
  user_id: string;
  comments: string;
};
