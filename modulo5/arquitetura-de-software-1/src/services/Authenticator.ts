import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/users";
export class Authenticator {
  generationToken = (payload: authenticationData): string => {
    return jwt.sign(payload, process.env.JWT as string, {
      expiresIn: "5h"
    });
  };
  getTokenData = (token: string): authenticationData => {
    return jwt.verify(token, process.env.JWT as string) as authenticationData;
  };
}
