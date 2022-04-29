import { app } from "./app";
import { login, signup } from "./service";

app.post("/create/user", signup);
app.post("/login", login);
