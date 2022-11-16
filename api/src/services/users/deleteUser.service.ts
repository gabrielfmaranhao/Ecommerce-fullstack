import User from "../../entities/users.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";

export const deleteUserService = async (id: string):Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({id});
    if(!findUser) {
        throw new AppError("Usuário não encontrado", 401)
    }
    if(!findUser.isAdm) {
        throw new AppError("Usuário não é adm", 402)
    }
    await userRepository.update(id,{isActive: false})
}