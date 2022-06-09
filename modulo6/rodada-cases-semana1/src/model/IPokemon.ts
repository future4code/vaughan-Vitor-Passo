import { pokemonBattle, Pokemons } from "../types/pokemons";

export interface IPokemon {
  getAllPokemons(offset: number): Promise<Pokemons[]>;
  getPokemonByName(name: string): Promise<pokemonBattle>;
  battlePokemons(
    pokemon1: pokemonBattle,
    pokemon2: pokemonBattle
  ): Promise<any>;
  getAllPokemonsByType(offset: number, type: string): Promise<pokemonBattle[]>;
}
