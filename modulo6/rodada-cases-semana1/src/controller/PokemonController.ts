import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { BaseError } from "../error/BaseError";
import { battlePokemonDTO } from "../types/pokemons";

export class PokemonController {
  constructor(private pokemonBusiness: PokemonBusiness) {}
  listAllPokemons = async (req: Request, res: Response): Promise<void> => {
    try {
      const pages = req.query.pages;
      const pagesNumber = Number(pages);
      const typePokemon = req.query.type as string;
      const pokemons = await this.pokemonBusiness.getAllPokemons(
        pagesNumber,
        typePokemon
      );
      res.status(200).send({ pokemons });
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ message: error.sqlMessage });
      } else {
        res.status(500).send({ message: "Erro ao se conectar ao servidor!" });
      }
    }
  };

  getPokemonByName = async (req: Request, res: Response): Promise<void> => {
    try {
      const name = req.params.name;
      const result = await this.pokemonBusiness.getPokemonByName(name);
      res.status(200).send({ result });
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ message: error.sqlMessage });
      } else {
        res.status(500).send({ message: "Erro ao se conectar ao servidor!" });
      }
    }
  };

  battlePokemon = async (req: Request, res: Response): Promise<void> => {
    try {
      const { pokemon1, pokemon2 } = req.body;
      const infoPokemon: battlePokemonDTO = {
        firstPokemon: pokemon1,
        secondPokemon: pokemon2
      };
      const pokemon = await this.pokemonBusiness.battlePoke(infoPokemon);

      res.status(200).send(pokemon);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ error: error.sqlMessage });
      } else {
        res.status(500).send({ message: "F" });
      }
    }
  };
}
