import { types } from "../types/ENUM";

export class Post {
  id: string;
  photo: string;
  time: Date;
  description: string;
  type: types;
  user_id: string;
}
