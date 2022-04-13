import { app } from "./app";
import { createProduct, createUser, getAllProduct } from "./endpoints/endpoints";

app.post('/users', createUser)

app.post('/products', createProduct)

app.get('/users/:user_id/purchases', getAllProduct)