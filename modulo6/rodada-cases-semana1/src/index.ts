import express from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { pokemonRouter } from "./routes/pokemon";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/pokemons", pokemonRouter);
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
