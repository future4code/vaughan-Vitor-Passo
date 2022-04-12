import { getAllUser } from "./endpoints/getAllUser";
import { app } from "./app";
app.get('/users', getAllUser)