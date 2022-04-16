import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    switch (e.message) {
      case "value":
        res.status(400).send();
        break;
      default:
        res.status(500).send({ message: e.sqlMessage || e.message });
        break;
    }
  }
};

