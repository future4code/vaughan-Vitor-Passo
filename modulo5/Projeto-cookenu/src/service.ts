import { CreteRecipesController } from "./endPoints/CreateRecipesController";
import { CreateUserController } from "./endPoints/CreateUserController";
import { LoginController } from "./endPoints/LoginController";
import getProfile from "./endPoints/profile";

const createUserController = new CreateUserController();
export const signup = createUserController.createUser;

const loginController = new LoginController();
export const login = loginController.login;

const createRecipeController = new CreteRecipesController();
export const recipes = createRecipeController.createRecipe;

export const profile = getProfile;
