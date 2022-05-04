import { app } from "./app";
import createUser from "./endPoints/createUser";
import getUserByEmail from "./endPoints/getUserByEmail";
import login from "./endPoints/login"
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/getUser/email', getUserByEmail)