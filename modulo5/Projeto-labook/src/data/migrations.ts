import { BaseDataBase } from "./BaseDataBase";

class Migrations extends BaseDataBase {
  printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
  };
  createTable = () =>
    this.connection
      .raw(
        `
        CREATE TABLE IF NOT EXISTS labebook_users(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
        CREATE TABLE IF NOT EXISTS labebook_posts(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            photo VARCHAR(255) NOT NULL,
            time DATETIME NOT NULL,
            description TEXT(1023), 
            type ENUM("NORMAL", "EVENTO"),
            user_id VARCHAR(255) NOT NULL,
            foreign key(user_id) references labebook_users(id)
        );

        CREATE TABLE IF NOT EXISTS labebook_friends(
            user_id VARCHAR(255) NOT NULL,
            friend_id VARCHAR(255),
            foreign key(user_id) REFERENCES labebook_users(id)
        );
        CREATE TABLE IF NOT EXISTS labebook_like(
            post_id VARCHAR (255) NOT NULL,
            user_id VARCHAR (255),
            foreign key(post_id) references labebook_posts(id),
            foreign key(user_id) references labebook_users(id)
        );

        CREATE TABLE IF NOT EXISTS labebook_comments(
            post_id VARCHAR (255) NOT NULL,
            user_id VARCHAR(255),
            foreign key(post_id) references labebook_posts(id),
            foreign key(user_id) references labebook_users(id)
        );
    `
      )
      .then(() => {
        console.log("Tabelas criadas");
      })
      .catch(this.printError);
}
const migrations = new Migrations();
migrations.createTable();
