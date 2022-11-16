import { Request, Response } from "express";
import { AppError } from "../../errors";
import { ISessionLoginRequest } from "../../interfaces";
import { sessionLoginService } from "../../services";

export const sessionLoginController = async (req: Request, res: Response) => {
    try {
        const data: ISessionLoginRequest = req.body;
        const token = await sessionLoginService(data)
        return res.status(201).json({token: token})
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
