import { Character, validateCharacter } from "../src";

describe("validando função que cria funcionario", () => {
  test("paramentro preenchidos", () => {
    const character: Character = {
      name: "as",
      life: 100,
      strength: 10,
      defense: 5
    };
    const result = validateCharacter(character);
    expect(result).toEqual({
      name: "as",
      life: 100,
      strength: 10,
      defense: 5
    });
  });
});
