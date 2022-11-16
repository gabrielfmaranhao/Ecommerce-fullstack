import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";
import { AppError } from "../../errors";
import { IUserUpdateRequest } from "../../interfaces/users";

export const updateUserService = async (data: IUserUpdateRequest, id:string ) :Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const userFind = await userRepository.findOneBy({id});
    if (!userFind) {
        throw new AppError("Usuário não encontrado")
    }
    if(userFind.isAdm === false) {
        if(data.isAdm) {
            throw new AppError("Usuário não é adm")
        }
        await userRepository.update(id,data)
        const user = await userRepository.findOneBy({id});
        return user!
    }
    await userRepository.update(id,data)
    const user = await userRepository.findOneBy({id});
    return user! 
}
