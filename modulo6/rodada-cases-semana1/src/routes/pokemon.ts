import express from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonController } from "../controller/PokemonController";
import { PokemonDataBase } from "../data/PokemonDataBase";

export const pokemonRouter = express.Router();
const pokemonData = new PokemonDataBase();
const pokemonBusiness = new PokemonBusiness(pokemonData);
const pokemonController = new PokemonController(pokemonBusiness);

pokemonRouter.get("/all", (req, res) =>
  pokemonController.listAllPokemons(req, res)
);
pokemonRouter.get("/:name", (req, res) =>
  pokemonController.getPokemonByName(req, res)
);
