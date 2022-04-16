import { app } from "./app";
import { createProduct } from "./endpoints/createProduct";
import { createUser } from "./endpoints/createUser";
import {getAllProduct} from "./endpoints/endpoints";
import { getAllUser } from "./endpoints/getAllUsers";

app.post('/users', createUser)

app.post('/products', createProduct)

app.get('/users', getAllUser)
app.get('/users/:user_id/purchases', getAllProduct)