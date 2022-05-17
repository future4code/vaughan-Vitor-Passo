import { BaseError } from "../error/BaseError";
import { IPokemon } from "../model/IPokemon";
import { Pokemons } from "../types/pokemons";

export class PokemonBusiness {
  constructor(private pokemonData: IPokemon) {}
  getAllPokemons = async (pages: number): Promise<Pokemons[]> => {
    if (pages <= 0) {
      throw new BaseError("Pagina somente acima de 1", 422);
    }
    const quantifyPokemonRend: number = 5;
    const offset: number = quantifyPokemonRend * (pages - 1);
    console.log(pages);
    const pokemons = await this.pokemonData.getAllPokemons(
      offset,
      quantifyPokemonRend
    );

    return pokemons;
  };

  getPokemonByName = async (name: string): Promise<Pokemons> => {
    const pokemon = await this.pokemonData.getPokemonByName(name);
    if (!pokemon) {
      throw new BaseError("Ésse pokemon não existe", 409);
    }
    return pokemon;
  };
}
