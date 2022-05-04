import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authentication } from "../services/Authentication";
import { HashManager } from "../services/hashManager";
import { IdGeneration } from "../services/idGenerator";
import { authenticationData, user } from "../types";

async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const generationId = new IdGeneration();
    const id: string = generationId.generationId();
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      res.statusCode = 422;
      throw new Error("Por favor preencha os campos 'name', 'email' e 'password'");
    }
    const [user] = await connection("usuarios").where({ email });
    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }
    const hashManager: HashManager = new HashManager()
    const cypherPassword = hashManager.createHash(password)
    const newUser: user = { 
        id, name, email, password:cypherPassword, role
    };
    
    await connection("usuarios").insert(newUser);

    const authentication: Authentication = new Authentication();

    const payload: authenticationData = {
      id: newUser.id,
      role: newUser.role
    };
    const token = authentication.generationToken(payload);
    res.status(201).send({ token: token });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
      
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
}

export default createUser;
