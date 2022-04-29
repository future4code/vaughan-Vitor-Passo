import { CreateUserController } from "./endPoints/createUser";
import { LoginController } from "./endPoints/login";

const createUserController = new CreateUserController();
export const signup = createUserController.createUser;

const loginController = new LoginController();
export const login = loginController.login;
