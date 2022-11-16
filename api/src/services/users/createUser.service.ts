import User from "../../entities/users.entitie";
import AppDataSource from "../../data-source";
import { IUsersRequest } from "../../interfaces";
import { AppError } from "../../errors";

export const createUserService = async (date:IUsersRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({email: date.email});
    
    if(findUser) {
        throw new AppError("User já existe", 401)
    }
    const user = userRepository.create(date)
    await userRepository.save(user)
    return user
}