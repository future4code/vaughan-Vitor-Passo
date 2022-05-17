import { Pokemons } from "../types/pokemons";

export interface IPokemon {
  getAllPokemons(): Promise<Pokemons[]>;
}
