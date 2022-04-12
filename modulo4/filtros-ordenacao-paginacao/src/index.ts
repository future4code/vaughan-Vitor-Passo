import { getAllUser, getUserName } from "./endpoints/getAllUser";
import { app } from "./app";
app.get('/users', getAllUser)

app.get('/users/:name', getUserName)