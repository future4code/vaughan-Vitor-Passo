import { verifyNumberIsPar } from "../src";
import { UserBusiness } from "../src/business/UserBusiness";
import { CustomError } from "../src/errors/CustomError";
import { UserTestsMock } from "./mocks/UserTestsMock";

const userBusinessMock = new UserBusiness(new UserTestsMock() as any);
describe("verify se usuário existe", () => {
  test("test", async () => {
    try {
      await userBusinessMock.getProfile("5");
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.message).toEqual("invalid credential");
        expect(error.statusCode).toEqual(401);
        console.log("foi");
      } else {
        console.log(error);
      }
    }
  });
});
