import { getAllUser, getUserName, orderUser } from "./endpoints/getAllUser";
import { app } from "./app";
app.get('/users', getAllUser)

app.get('/users/all', orderUser)
app.get('/users/:name', getUserName)
