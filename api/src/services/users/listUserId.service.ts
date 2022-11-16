import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";
import { AppError } from "../../errors";

export const listUserIdService = async (id: string):Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({id});
    if(!findUser) {
        throw new AppError("Usuário não encontrado")
    }

    return findUser
}