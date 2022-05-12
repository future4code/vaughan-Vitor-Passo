import { verifyNumberIsPar } from "../src";

describe("verify number par", () => {
  test("test", () => {
    const result = verifyNumberIsPar(2);
    expect(result).toBe(true);
  });
});
