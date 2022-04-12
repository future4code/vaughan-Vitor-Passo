import { getAllUser, getUserName, orderUser, limitUser } from "./endpoints/endPoint";
import { app } from "./app";
app.get('/users', getAllUser)

app.get('/users/all', orderUser)
app.get('/users/limit/:num', limitUser)
app.get('/users/:name', getUserName)

