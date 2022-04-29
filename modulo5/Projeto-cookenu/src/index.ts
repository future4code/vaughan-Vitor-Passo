import { app } from "./app";
import { CreateUserController } from "./endPoints/createUser";
import { LoginController } from "./endPoints/login";

const createUserController = new CreateUserController();
const loginController = new LoginController();
const login = loginController.login;
app.post("/create/user", createUserController.createUser);
app.post("/login", login);
