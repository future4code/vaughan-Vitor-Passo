import { app } from "./app";
import { login, profile, signup } from "./service";

app.post("/create/user", signup);
app.post("/login", login);
app.get("/profile", profile);
