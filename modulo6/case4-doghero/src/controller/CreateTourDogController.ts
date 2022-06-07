import { Request, Response } from "express";
import { CreateTourDogBusiness } from "../business/CreateTourDogBusiness";
import { CustomError } from "../error/CustomError";
import { createTourDogDTO } from "../types/createTourDog";

export class CreateTourDogController {
  constructor(private createTourDogBussiness: CreateTourDogBusiness) {}
  createTourController = async (req: Request, res: Response): Promise<void> => {
    try {
      // const { date, duration, pets, startWalk, finishWalk } = req.body;
      const { date, duration, pets, startWalk, finishWalk } = req.body;
      const createTourDogDTO: createTourDogDTO = {
        date,
        duration,
        pets,
        startWalk,
        finishWalk
      };
      await this.createTourDogBussiness.CreateTourBusiness(createTourDogDTO);
      res.status(201).send({});
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ message: error });
      } else {
        res.status(500).send({ message: "Server error" });
      }
    }
  };
}
