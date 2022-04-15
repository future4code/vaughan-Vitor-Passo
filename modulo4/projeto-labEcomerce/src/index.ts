import { app } from "./app";
import { createProduct, createUser, getAllProduct, getAllUser } from "./endpoints/endpoints";

app.post('/users', createUser)

app.post('/products', createProduct)

app.get('/users', getAllUser)
app.get('/users/:user_id/purchases', getAllProduct)