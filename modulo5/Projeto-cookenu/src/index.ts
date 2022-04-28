import { app } from "./app";
import { MysqlUsersRepository } from "./repositories/implementations/MysqlUsersRepository";
import { CreateUserController } from "./useCases/CreateUser/CreateUserCrontroller";

import { CreateUserUseCase } from "./useCases/CreateUser/CreateUserUseCase";

const mysqlUsersRepository = new MysqlUsersRepository();

const createUserUseCase = new CreateUserUseCase(mysqlUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);
app.post("/create/user", createUserController.handle);
