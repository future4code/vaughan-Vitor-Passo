import { BaseDataBase } from "./BaseDataBase";
import dotenv from "dotenv";
dotenv.config();
export class CreateTable extends BaseDataBase {
  createTables = () =>
    this.connection
      .raw(
        `
        CREATE TABLE IF NOT EXISTS dogHero(
            id VARCHAR(255) primary KEY,
            status ENUM("a fazer", "em andamento", "concluído") DEFAULT "a fazer",
            date_schedule DATE NOT NULL,
            price FLOAT NOT NULL,
            latitude VARCHAR(255) NOT NULL,
            longitude VARCHAR(255) NOT NULL,
            duration ENUM("30", "60") NOT NULL,
            date_start timestamp NOT NULL, 
            date_end timestamp NOT NULL 
        );
        CREATE TABLE IF NOT EXISTS pets(
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          dogHero_id VARCHAR(255) NOT NULL,
          FOREIGN KEY (dogHero_id) REFERENCES dogHero(id)
      );
    `
      )
      .then(() => console.log("Tabelas criadas com sucesso"))
      .catch((error: any) => console.log(error.sqlMessage || error.message));
  closeConnection = () => this.connection.destroy();
}

const createTable = new CreateTable();
createTable.createTables().finally(createTable.closeConnection);
