import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../errors/CustomError";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  getProfileById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await this.userBusiness.getProfile(id);
      console.log(result);
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  };
}
