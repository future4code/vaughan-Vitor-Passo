import { app } from "./app";
import { CreateUserController } from "./endPoints/createUser";

const createUserController = new CreateUserController();
app.post("/create/user", createUserController.createUser);
