import { User } from "../../entities/User";
import { IUserRepositories } from "../../repositories/IUserRepositories";
import { ICreateUserRequestDto } from "../CreateUser/CreateUserDTO";
export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepositories) {}
  execute = async (data: ICreateUserRequestDto) => {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );
    if (userAlreadyExists) {
      throw new Error("Usuário já existe");
    }
    const user = new User(data);
    await this.usersRepository.save(user);
  };
}
