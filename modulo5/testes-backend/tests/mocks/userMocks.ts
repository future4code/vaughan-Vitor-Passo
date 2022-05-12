import { User, USER_ROLES } from "../../src/model/User";

export const newUser = new User(
  "id-mokado",
  "Vitor",
  "vitor@gmail.com",
  USER_ROLES.ADMIN
);

export const newUser2 = new User(
  "id-mokado2",
  "Vitinho",
  "vitor12@gmail.com",
  USER_ROLES.NORMAL
);
