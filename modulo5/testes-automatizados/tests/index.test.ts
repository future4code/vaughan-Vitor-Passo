import { perfomPurchase } from "../src/index";
import { User } from "../model/IUser";
describe("testando o teste", () => {
  test("test", () => {
    const user: User = { name: "Iza", balance: 15 };
    const result = perfomPurchase(user, 5);
    expect(result).toEqual({ name: "Iza", balance: 10 });
  });
});
