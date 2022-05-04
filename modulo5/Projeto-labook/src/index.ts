import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import { UserController } from "./controller/UserController";
import { UserDataBase } from "./data/UserDataBase";

const userDataBase = new UserDataBase();
const userBusiness = new UserBusiness(userDataBase);

const userController = new UserController(userBusiness);

app.post("/users/signup", userController.signup);
app.post("/users/login", userController.login);
