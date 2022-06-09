import { IPokemon } from "../model/IPokemon";
import { pokemonBattle, Pokemons } from "../types/pokemons";
import { BaseDataBase } from "./BaseDataBase";

export class PokemonDataBase extends BaseDataBase implements IPokemon {
  private TABLE_NAME = "Pokemon_Go";
  // private quantifyPokemonRend: number = 5;
  async getAllPokemons(offset: number): Promise<pokemonBattle[]> {
    const pokemons = await this.getConnection()
      .select("name", "Type_1", "Type_2", "ATK", "DEF")
      .from(this.TABLE_NAME)
      .limit(5)
      .offset(offset);
    return pokemons;
  }

  async getPokemonByName(name: string): Promise<pokemonBattle> {
    const pokemons = await this.getConnection()
      .select("name", "Type_1", "Type_2", "ATK", "DEF")
      .from(this.TABLE_NAME)
      .where({ name });
    return pokemons[0];
  }

  async getAllPokemonsByType(
    offset: number,
    type: string
  ): Promise<pokemonBattle[]> {
    const pokemons = await this.getConnection()
      .select("name", "Type_1", "Type_2", "ATK", "DEF")
      .from(this.TABLE_NAME)
      .whereLike("Type_1", `${type}%`)
      .limit(5)
      .offset(offset);
    return pokemons;
  }

  async battlePokemons(
    pokemon1: pokemonBattle,
    pokemon2: pokemonBattle
  ): Promise<pokemonBattle> {
    const resultBattle = await this.getConnection()
      .select("name")
      .from(this.TABLE_NAME);
    // .where(`${pokemon1.ATK}`, ">", `${pokemon2.DEF}`)
    // .orWhere(`${pokemon1.ATK}`, "<", `${pokemon2.DEF}`)
    // .orWhere(`${pokemon2.ATK}`, ">", `${pokemon1.DEF}`)
    // .orWhere(`${pokemon2.ATK}`, "<", `${pokemon1.DEF}`)
    // .orWhere(`${pokemon1.ATK}`, "=", `${pokemon2.DEF}`);
    return resultBattle[0];
  }
}
