import { CreateUserController } from "./endPoints/CreateUserController";
import { LoginController } from "./endPoints/LoginController";
import getProfile from "./endPoints/profile";

const createUserController = new CreateUserController();
export const signup = createUserController.createUser;

const loginController = new LoginController();
export const login = loginController.login;

export const profile = getProfile;
