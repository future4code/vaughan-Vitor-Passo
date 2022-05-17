import { Pokemons } from "../types/pokemons";

export interface IPokemon {
  getAllPokemons(
    offset: number,
    quantifyPokemonRend: number
  ): Promise<Pokemons[]>;
  getPokemonByName(name: string): Promise<Pokemons>;
}
