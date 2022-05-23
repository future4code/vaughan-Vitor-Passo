import { CustomError } from "../../src/errors/CustomError";
import { User } from "../../src/model/User";
import { newUser, newUser2 } from "./userMocks";

export class UserTestsMock {
  async getProfile(id: string): Promise<User | undefined> {
    if (!id) {
      throw new CustomError(422, "Empety value");
    }
    const testId = id;
    if (typeof testId !== "string") {
      throw new CustomError(404, "Type wrong");
    }
    if (testId !== "id-mokado") {
      throw new CustomError(401, "invalid credential");
    }
    if (testId === "id-mokado") {
      return newUser;
    } else if (testId === "id-mokado2") {
      return newUser2;
    } else {
      return undefined;
    }
  }
}
