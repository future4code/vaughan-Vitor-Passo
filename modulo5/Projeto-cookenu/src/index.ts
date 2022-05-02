import { app } from "./app";
import { getProfileById } from "./endPoints/getProfileById";
import { followProfile, login, profile, recipes, signup } from "./service";

app.post("/create/user", signup);
app.post("/login", login);
app.post("/recipes", recipes);
app.post("/profile/follow", followProfile);
app.get("/profile", profile);
app.get("/profile/:id", getProfileById);
