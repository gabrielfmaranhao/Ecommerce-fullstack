import { Request, Response} from "express";
import { AppError } from "../../errors";
import { IUserUpdateRequest } from "../../interfaces/users";
import { createUserService, deleteUserService, listUserIdService, listUserService, updateUserService } from "../../services";


export const createUserController = async(req: Request, res:Response) => {
    try {
        const date = req.body;
        const user = await createUserService(date)
        return res.status(200).json(user)
        
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
export const listUserController = async(req: Request, res:Response) => {
    
        const list = await listUserService()
        return res.status(201).json(list)
    
}

export const listIdUserController = async(req: Request, res:Response) => {
    try {
        const id : string = req.params.id;
        const user = await listUserIdService(id);
        return res.status(200).json({user});
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}

export const updateUserController = async(req: Request, res:Response) => {
    try {
        const data: IUserUpdateRequest = req.body;
        const id: string = req.params.id;
        const user = await updateUserService(data, id);
        return res.status(201).json({user})
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}

export const deleteUserController = async(req: Request, res:Response) => {
    try {
        const id: string = req.params.id
        await deleteUserService(id)
        return res.status(200).send("Usuário excluido!")
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}