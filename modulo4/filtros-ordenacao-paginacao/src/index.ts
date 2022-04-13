import { getAllUser, getUserName, orderUser, limitUser, getUsers } from "./endpoints/endPoint";
import { app } from "./app";
app.get('/get/users', getUsers)
app.get('/users', getAllUser)
app.get('/users/all', orderUser)
app.get('/users/limit/:num', limitUser)
app.get('/users/:name', getUserName)

