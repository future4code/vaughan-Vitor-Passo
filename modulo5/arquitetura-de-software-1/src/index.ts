import { app } from "./controller/app";
import { UserControlle } from "./controller/UserController";
const userController = new UserControlle();
app.post("/user/signup", userController.signup);
app.post("/user/login", userController.login);
app.get("/users", userController.getAllUser);
