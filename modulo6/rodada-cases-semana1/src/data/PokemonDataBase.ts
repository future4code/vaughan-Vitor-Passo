import { IPokemon } from "../model/IPokemon";
import { Pokemons } from "../types/pokemons";
import { BaseDataBase } from "./BaseDataBase";

export class PokemonDataBase extends BaseDataBase implements IPokemon {
  private TABLE_NAME = "Pokemon_Go";
  async getAllPokemons(): Promise<Pokemons[]> {
    const pokemons = await this.getConnection()
      .select("name", "Type_1", "Type_2")
      .from(this.TABLE_NAME)
      .limit(5);
    return pokemons;
  }
}
