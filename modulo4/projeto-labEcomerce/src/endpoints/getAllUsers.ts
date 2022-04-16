import { connection } from "../data/connection";
import { Request, Response } from "express";
export const getAllUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await connection("labecommerce_users")
        .select("*")
        .from("labecommerce_users");
      res.status(201).send(result);
    } catch (e) {
      switch (e.message) {
        case "value":
          break;
  
        default:
          res.status(500).send({ message: e.sqlMessage || e.message });
          break;
      }
    }
  };
  