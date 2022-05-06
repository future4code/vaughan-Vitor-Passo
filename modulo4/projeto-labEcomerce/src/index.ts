import { app } from "./app";
import { createProduct } from "./endpoints/createProduct";
import { createUser } from "./endpoints/createUser";
import {getAllProduct} from "./endpoints/getAllProduct";
import { getAllUser } from "./endpoints/getAllUsers";
import { getPurchases } from "./endpoints/getPurchases";
import { purchases } from "./endpoints/purchases";

app.post('/users', createUser)
app.post('/products', createProduct)
app.post('/purchases', purchases)
app.get('/users', getAllUser)
app.get('/products', getAllProduct)
app.get('/users/:user_id/purchases', getPurchases)