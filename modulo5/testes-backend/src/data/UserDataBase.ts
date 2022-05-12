import { User } from "../model/User";
import BaseDataBase from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  protected tableName: string = "INSIRA AQUI O NOME DA SUA TABELA DE USUÁRIOS";
  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel && new User(dbModel.id, dbModel.name, dbModel.email, dbModel.role)
    );
  }

  public async getUserById(id: string): Promise<User | undefined> {
    try {
      const result = await BaseDataBase.connection.raw(`
              SELECT * from ${this.tableName} WHERE id = '${id}'
           `);
      return this.toModel(result[0][0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
