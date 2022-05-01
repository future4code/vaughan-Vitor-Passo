import { app } from "./app";
import { login, profile, recipes, signup } from "./service";

app.post("/create/user", signup);
app.post("/login", login);
app.post("/recipes", recipes);
app.get("/profile", profile);
