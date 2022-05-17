import { CreteRecipesController } from "./endPoints/CreateRecipesController";
import { CreateUserController } from "./endPoints/CreateUserController";
import { FollowProfilleController } from "./endPoints/FollowProfileController";
import { LoginController } from "./endPoints/LoginController";
import getProfile from "./endPoints/profile";

//instanciando classe de criação de um usuario
const createUserController = new CreateUserController();
export const signup = createUserController.createUser;

//instanciando classe para login
const loginController = new LoginController();
export const login = loginController.login;

//instanciando classe de criação de uma receita
const createRecipeController = new CreteRecipesController();
export const recipes = createRecipeController.createRecipe;

//exportando função de pegar perfil por id
export const profile = getProfile;

const followUser = new FollowProfilleController();
export const followProfile = followUser.followUser;
