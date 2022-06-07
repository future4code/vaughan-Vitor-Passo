import { CustomError } from "../error/CustomError";
import { IdGeneration } from "../services/IdGenerations";
import { createTourDogDTO } from "../types/createTourDog";

export class CreateTourDogBusiness {
  constructor(private idGeneration: IdGeneration) {}
  CreateTourBusiness = async (createDog: createTourDogDTO): Promise<void> => {
    const { date, duration, pets, startWalk, finishWalk } = createDog;
    if (!date || !duration || !pets || !startWalk || !finishWalk) {
      throw new CustomError(422, "Please check all fields");
    }
  };
}
