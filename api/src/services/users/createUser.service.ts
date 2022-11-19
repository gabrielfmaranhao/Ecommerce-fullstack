import User from "../../entities/users.entitie";
import AppDataSource from "../../data-source";
import { IUsersRequest } from "../../interfaces";
import { AppError } from "../../errors";
import bcrypt from "bcrypt"

export const createUserService = async (date:IUsersRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({email: date.email});
    
    if(findUser) {
        throw new AppError("User já existe", 401)
    }
    date.password = await bcrypt.hash(date.password, 10);
    const user = userRepository.create(date)
    await userRepository.save(user)
    return user
}