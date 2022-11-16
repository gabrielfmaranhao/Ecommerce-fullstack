import User from "../../entities/users.entitie";
import AppDataSource from "../../data-source";


export const listUserService = async () :Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User);
    const listUsers = await userRepository.find();
    return listUsers
}