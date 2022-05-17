import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { BaseError } from "../error/BaseError";

export class PokemonController {
  constructor(private pokemonBusiness: PokemonBusiness) {}
  listAllPokemons = async (req: Request, res: Response): Promise<void> => {
    try {
      const pages = req.query.pages;
      const idk = Number(pages);
      console.log(idk);
      const pokemons = await this.pokemonBusiness.getAllPokemons(idk);
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
}
