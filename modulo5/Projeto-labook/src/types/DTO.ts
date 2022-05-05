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

// export type crendential = {
//   id: string;
//   token: string;
// };
