import { app } from "./app";
import createUser from "./endPoint/createUser";
import login from "./endPoint/login";

app.post('/user/signup', createUser)
app.post('/user/login', login)