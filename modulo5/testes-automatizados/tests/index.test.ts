// import { perfomPurchase } from "../src/index";
import { Casino, LOCATION, NACIONALITY, User, Users } from "../model/IUser";
import { verifyAge } from "../src/index";
// 2- Questão
//A)

// describe("testando o teste", () => {
//   test("test", () => {
//     const user: Users = { name: "Iza", balance: 15 };
//     const result = perfomPurchase(user, 15);
//     expect(result).toEqual({ name: "Iza", balance: 10 });
//   });
// });

//b)
// describe("saldo igual ao da compra", () => {
//   test("verificando o se o valor", () => {
//     const user: Users = { name: "Iza", balance: 15 };
//     const result = perfomPurchase(user, 15);
//     expect(result).toEqual({ name: "Iza", balance: 0 });
//   });
// });

//c)
// describe("saldo menor que o valor da compra", () => {
//   test("saldo menor que o valor da compra", () => {
//     const user: Users = { name: "Iza", balance: 15 };
//     const result = perfomPurchase(user, 20);
//     expect(result).toEqual({ name: "Iza", balance: 15 });
//   });
// });

// 3 - Questão
//A)

test("Pegando brasileiros que tem acesso ao cassino", () => {
  const casino: Casino = {
    name: "Test",
    location: LOCATION.BRAZIL
  };
  const user: User = {
    name: "Vitor",
    age: 18,
    nacionality: NACIONALITY.BRAZILIAN
  };
  const result = verifyAge(casino, [user]);
  expect(result).toEqual({})
});
