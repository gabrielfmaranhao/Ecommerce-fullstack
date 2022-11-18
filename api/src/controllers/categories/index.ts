import { Request, Response } from "express";
import { AppError } from "../../errors";
import { ICategoriesRequest } from "../../interfaces";
import { ICategorieUpdate } from "../../interfaces/categories";
import { createCategorieService, deleteCategorieService, listCategorieService, listProductCategorieService, updateCategorieService } from "../../services";


export const createCategorieController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const categorie = await createCategorieService(data);
        return res.status(200).json(categorie)
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
export const listCategorieController = async (req: Request, res: Response) => {
    const list = await listCategorieService();
    return res.status(200).json(list);
}
export const listProductCategorieController = async (req: Request, res: Response) => {
    try {
        const name:string = req.params.name;
        const listProducts = await listProductCategorieService(name);
        return res.status(200).json(listProducts)
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
export const updateCategorieController = async (req: Request, res: Response) => {
    try {
        const data:ICategorieUpdate = req.body
        const name:string = req.params.name
        const categorieUpdate = await updateCategorieService(data, name);
        return res.status(201).json(categorieUpdate)
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
export const deleteCategorieController = async (req: Request, res: Response) => {
    try {
        const name:string = req.params.name
        await deleteCategorieService(name)
        return res.status(200).json({})
    } catch (error) {
        if( error instanceof AppError) {
            return res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}