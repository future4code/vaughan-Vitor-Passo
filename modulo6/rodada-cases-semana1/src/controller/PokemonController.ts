import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { BaseError } from "../error/BaseError";

export class PokemonController {
  constructor(private pokemonBusiness: PokemonBusiness) {}
  listAllPokemons = async (req: Request, res: Response): Promise<void> => {
    try {
      const pokemons = await this.pokemonBusiness.getAllPokemons();
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
}
