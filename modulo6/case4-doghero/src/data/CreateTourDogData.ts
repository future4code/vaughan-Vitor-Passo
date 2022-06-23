import { ICreateTourDogData } from "../model/ICreateTourDogData";
import { BaseDataBase } from "./BaseDataBase";

export class CreateTourDogData extends BaseDataBase
  implements ICreateTourDogData {
  private TABLE_NAME = "";
  async createTourDog(): Promise<void> {}
}
