import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authenticationData } from "../types/types";
dotenv.config();
export class Authentication {
  generationToken = (payload: authenticationData) => {
    return jwt.sign(payload, process.env.JWT as string, {
      expiresIn: "5h"
    });
  };
  getTokenData = (token: string) => {
    try {
      const dataToken = jwt.verify(
        token,
        process.env.JWT as string
      ) as authenticationData;
      return dataToken;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
