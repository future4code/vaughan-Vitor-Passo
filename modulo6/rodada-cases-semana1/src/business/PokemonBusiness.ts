import { IPokemon } from "../model/IPokemon";
import { Pokemons } from "../types/pokemons";

export class PokemonBusiness {
  constructor(private pokemonData: IPokemon) {}
  getAllPokemons = async (): Promise<Pokemons[]> => {
    const pokemons = await this.pokemonData.getAllPokemons();

    return pokemons;
  };
}
