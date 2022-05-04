import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authentication } from "../services/Authentication";
import { HashManager } from "../services/hashManager";
import { authenticationData, USER_ROLES } from "../types";

async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Por favor preencha 'email' e 'senha'");
    }
    const [user] = await connection("usuarios").where({ email });
    if (!user) {
      res.statusCode = 401;
      throw new Error("Usuário inexistente");
    }
  
    const hashManager: HashManager = new HashManager()
   
    const comparePassword:boolean = hashManager.compareHash(password, user.password)
    
    if (!comparePassword) {
        throw new Error("Senha inválida");
    }
    const authentication: Authentication = new Authentication()
    const payload: authenticationData = {
        id: user.id,
        role: user.role
    }
    const token = authentication.generationToken(payload)
    res.status(200).send({token: token})
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
}
export default login;
