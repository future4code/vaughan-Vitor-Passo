import { app } from "./app";
import createUser from "./endPoints/createUser";
import login from "./endPoints/login";

app.post('/user/signup', createUser)
app.get('/user/login', login)