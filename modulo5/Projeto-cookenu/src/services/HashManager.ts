import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export class HashManager {
  createHash = (playText: string): string => {
    const cost = 12;
    const salt: string = genSaltSync(cost);
    const cypherText: string = hashSync(salt);
    return cypherText;
  };
  compareHash = (plainText: string, cypherText: string) => {
    return compareSync(plainText, cypherText);
  };
}
