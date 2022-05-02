import { app } from "./app";
import { getProfileById } from "./endPoints/getProfileById";
import { getRecipeById } from "./endPoints/getRicepeById";
import { unfollow } from "./endPoints/UnfollowController";
import { followProfile, login, profile, recipes, signup } from "./service";

app.post("/create/user", signup);
app.post("/login", login);
app.post("/recipes", recipes);
app.post("/profile/follow", followProfile);
app.post("/profile/unfollow", unfollow);
app.get("/profile", profile);
app.get("/profile/:id", getProfileById);
app.get("/recipes/:id", getRecipeById);
