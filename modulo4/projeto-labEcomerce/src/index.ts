import { app } from "./app";
import { createProduct } from "./endpoints/createProduct";
import { createUser } from "./endpoints/createUser";
import {getAllProduct} from "./endpoints/getAllProduct";
import { getAllUser } from "./endpoints/getAllUsers";

app.post('/users', createUser)
app.post('/products', createProduct)
app.get('/users', getAllUser)
app.get('/products', getAllProduct)