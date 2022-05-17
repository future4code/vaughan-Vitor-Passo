import { IPokemon } from "../model/IPokemon";
import { Pokemons } from "../types/pokemons";
import { BaseDataBase } from "./BaseDataBase";

export class PokemonDataBase extends BaseDataBase implements IPokemon {
  private TABLE_NAME = "Pokemon_Go";
  // private quantifyPokemonRend: number = 5;
  async getAllPokemons(
    offset: number,
    quantifyPokemonRend: number
  ): Promise<Pokemons[]> {
    const pokemons = await this.getConnection()
      .select("name", "Type_1", "Type_2")
      .from(this.TABLE_NAME)
      .limit(5)
      .offset(offset);
    return pokemons;
  }

  async getPokemonByName(name: string): Promise<Pokemons> {
    const pokemons = await this.getConnection()
      //   .select("name", "Type_1", "Type_2")
      .from(this.TABLE_NAME)
      .where({ name });
    return pokemons[0];
  }
}
