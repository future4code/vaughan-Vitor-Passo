import { app } from "./app";
import { criandoEndereco } from "./services/createAdress";


app.post('/address', criandoEndereco)
