import { PostBusiness } from "./business/PostBusiness";
import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";
import { PostDataBase } from "./data/PostDataBase";
import { UserDataBase } from "./data/UserDataBase";

const userDataBase = new UserDataBase();
const userBusiness = new UserBusiness(userDataBase);

const userController = new UserController(userBusiness);
const postData = new PostDataBase();
const postBusiness = new PostBusiness(postData);
const postController = new PostController(postBusiness);
app.post("/users/signup", userController.signup);
app.post("/users/login", userController.login);
app.post("/post", postController.createPost);

app.get("/post/:id", postController.getPostById);
