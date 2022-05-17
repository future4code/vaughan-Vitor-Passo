import { BaseDatabase } from "./BaseDatabase";
import users from "../data/users.json";
import recipes from "../data/recipes.json";
const printError = (error: any) =>
  console.log({ message: error.sqlMessage || error.message });

const createUser = () =>
  BaseDatabase.connection
    .raw(
      `
    CREATE TABLE IF NOT EXISTS cookenu_user (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
   );
    `
    )
    .then(() => {
      console.log("Tabelas de usuarios criada");
    });
const createRecipe = () =>
  BaseDatabase.connection
    .raw(
      `CREATE TABLE IF NOT EXISTS cookenu_recipes (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT(1023),
  creationDate DATETIME NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY(user_id) REFERENCES cookenu_user(id) 
);`
    )
    .then(() => {
      console.log("Tabelas de receitas criada");
    });
const insertUser = () =>
  BaseDatabase.connection("cookenu_user")
    .insert(users)
    .then(() => {
      console.log("Usuarios Criados");
    })
    .catch(printError);

const insertRecipes = () =>
  BaseDatabase.connection("cookenu_recipes")
    .insert(recipes)
    .then(() => {
      console.log("Receitas criadas");
    })
    .catch(printError);

const closeConnection = new BaseDatabase();
const destroy = () => closeConnection.closeConnection();
createUser().then(insertUser);
createRecipe().then(insertRecipes).finally(destroy);
