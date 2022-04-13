import { app } from "./app";
import { criandoEndereco } from "./services/createAdress";


app.post('/elbin/gay', criandoEndereco)
