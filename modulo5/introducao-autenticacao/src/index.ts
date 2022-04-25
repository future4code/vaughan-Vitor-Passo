import { app } from "./app";
import createUser from "./endPoints/createUser";

app.post('/user/signup', createUser)