import express from "express";
import { CreateTourDogController } from "../controller/CreateTourDogController";
export const createTourDogRouter = express.Router();
const createTourController = new CreateTourDogController();
createTourDogRouter.post("/create", (req, res) =>
  createTourController.createTourController(req, res)
);
