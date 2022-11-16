import { compare } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";
import { AppError } from "../../errors";
import { ISessionLoginRequest } from "../../interfaces";
import jwt from "jsonwebtoken";

export const sessionLoginService = async(data:ISessionLoginRequest):Promise<string> => {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({email: data.email});
    
    if(!findUser) {
        throw new AppError("Password ou usuário inválido",400)
    }
    const passwordMatch = await compare(data.password, findUser.password);
    
    if(!passwordMatch) {
        throw new AppError("Password ou usuário inválido",400)
    }
    if(!findUser.isActive) {
        throw new AppError("Password ou usuário inválido",400)
    }
    const token = jwt.sign({isAdm: findUser.isAdm}, process.env.SECRET_KEY as string, {subject: findUser.id, expiresIn: "24h"})
    return token
}