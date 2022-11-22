import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";


export const profileUserService = async (id:string) :Promise<User> => {
    console.log(id)
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({id});
    return user!
}