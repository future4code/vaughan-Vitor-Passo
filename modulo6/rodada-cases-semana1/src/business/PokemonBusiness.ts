import { BaseError } from "../error/BaseError";
import { IPokemon } from "../model/IPokemon";
import { battlePokemonDTO, pokemonBattle, Pokemons } from "../types/pokemons";

export class PokemonBusiness {
  constructor(private pokemonData: IPokemon) {}
  getAllPokemons = async (pages: number): Promise<Pokemons[]> => {
    if (pages <= 0) {
      throw new BaseError("Pagina somente acima de 1", 404);
    }
    const quantifyPokemonRend: number = 5;
    const offset: number = quantifyPokemonRend * (pages - 1);

    const pokemons = await this.pokemonData.getAllPokemons(offset);

    if (pokemons.length <= 0) {
      throw new BaseError("Página não encontrada", 404);
    }

    return pokemons;
  };

  getPokemonByName = async (name: string): Promise<Pokemons> => {
    const pokemon = await this.pokemonData.getPokemonByName(name);
    if (!pokemon) {
      throw new BaseError("Esse pokemon não existe", 404);
    }
    return pokemon;
  };

  battlePoke = async (infoPokemon: battlePokemonDTO): Promise<any> => {
    const { firstPokemon, secondPokemon } = infoPokemon;
    if (!firstPokemon || !secondPokemon) {
      throw new BaseError("Por favor, preencha todos os campos", 422);
    }
    const isExistFirstPokemonInTheData = await this.pokemonData.getPokemonByName(
      firstPokemon
    );
    const isExistSecondPokemonInTheData = await this.pokemonData.getPokemonByName(
      secondPokemon
    );
    if (!isExistFirstPokemonInTheData && !isExistSecondPokemonInTheData) {
      throw new BaseError("Pokemons não encontrados na base de dados", 404);
    }

    let result = {};
    if (isExistFirstPokemonInTheData.ATK > isExistSecondPokemonInTheData.DEF) {
      result = { pokemon1: isExistFirstPokemonInTheData, result: "Vitória" };
    } else if (
      isExistFirstPokemonInTheData.ATK < isExistSecondPokemonInTheData.DEF
    ) {
      result = isExistSecondPokemonInTheData;
      result = { pokemon1: isExistSecondPokemonInTheData, result: "Vitória" };
    } else if (
      isExistFirstPokemonInTheData.ATK === isExistSecondPokemonInTheData.DEF
    ) {
      result = {
        pokemons: [isExistFirstPokemonInTheData, isExistSecondPokemonInTheData],
        result: "Empate"
      };
    }
    return result;
  };

  getAllPokemonByType = async (
    type: string,
    pagesNumber: number
  ): Promise<pokemonBattle[]> => {
    if (pagesNumber <= 0) {
      throw new BaseError("Pagina somente acima de 1", 404);
    }
    const quantifyPokemonRend: number = 5;
    const offset: number = quantifyPokemonRend * (pagesNumber - 1);

    const pokeType = await this.pokemonData.getAllPokemonsByType(offset, type);
    if (pokeType.length <= 0) {
      throw new BaseError("Página não encontrada", 404);
    }
    return pokeType;
  };
}
