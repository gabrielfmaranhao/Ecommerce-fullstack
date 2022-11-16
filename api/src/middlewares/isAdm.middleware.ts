import { Request, Response, NextFunction } from "express";


export const verifyIsAdmMiddleware = (req: Request, res: Response, nex: NextFunction) => {
    if(!req.user.adm) {
        return res.status(403).json({ message: "Usuário não é adm"})
    }
    return nex();
}