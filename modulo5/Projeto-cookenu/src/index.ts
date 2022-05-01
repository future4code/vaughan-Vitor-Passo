import { app } from "./app";
import { getProfileById } from "./endPoints/getProfileById";
import { login, profile, recipes, signup } from "./service";

app.post("/create/user", signup);
app.post("/login", login);
app.post("/recipes", recipes);
app.get("/profile", profile);
app.get("/profile/:id", getProfileById);
