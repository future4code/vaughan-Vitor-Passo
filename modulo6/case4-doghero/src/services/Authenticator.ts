import * as jwt from "jsonwebtoken";
import { authenticatorData } from "../types/authenticatorData";
import dotenv from "dotenv";
dotenv.config();
export class Authenticator {
  generateToken(payload: authenticatorData) {
    return jwt.sign(payload, process.env.JWT as string, {
      expiresIn: process.env.experiresIn
    });
  }
  getTokenData(token: string) {
    try {
      const tokenData = jwt.verify(
        token,
        process.env.JWT as string
      ) as authenticatorData;
      return tokenData;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
