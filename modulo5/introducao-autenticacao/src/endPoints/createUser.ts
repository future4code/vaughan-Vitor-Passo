import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authentication } from "../services/Authentication";
import { IdGeneration } from "../services/IdGeneration";
import { authenticationData, user } from "../types";

async function createUser(req: Request,res: Response): Promise<void> {
  try {
    const generationId = new IdGeneration();
    const id: string = generationId.generationId();
    const { email, password } = req.body;
    if (!email || !password) {
        res.statusCode = 422;
        throw new Error("Por favor preencha os campos 'nome' e 'password'");
    }
    if(password.length < 6){
        res.statusCode = 409;
        throw new Error("A senha deve ter no minimo 6 caractéries");
    }
    
    if(email.indexOf('@') === -1){
        res.statusCode = 401
        throw new Error("É preciso passar um email no campo email");
    }
    
    const [user] = await connection("usuarios").where({ email });
    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }

    const newUser: user = { id, email, password };
    
    await connection('usuarios').insert(newUser)
    
    const authentication: Authentication = new Authentication();

    const payload: authenticationData = {
      id: newUser.id
    };
    const token = authentication.generationToken(payload);
    res.status(201).send({token: token})
    
  } catch (error: any) {
    if (res.statusCode === 200) {
        res.status(500).send({ message: "Internal server error" })
    } else {
        res.send({ message: error.message || error.sqlMessage })
    }
  }
}
export default createUser