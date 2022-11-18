import { Request, Response } from "express";
import { AppError } from "../../errors";
import { IProductsRequest } from "../../interfaces";
import { IProductsUpdate } from "../../interfaces/products";
import { createProductService, deleteProductService, listProductService, listProductIdService, updateIventoryProductService, updateProductService } from "../../services";

export const createProductsController = async (req: Request, res: Response) => {
    try {
        const data:IProductsRequest = req.body;
        const product = await createProductService(data)
        return res.status(201).json(product);
    } catch (error) {
        if(error instanceof AppError) {
            res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
export const listProductsController = async (req: Request, res: Response) => {
        const list = await listProductService();
        return res.status(200).json(list)
}
export const updateProductsController = async (req: Request, res: Response) => {
    try {
        const data:IProductsUpdate = req.body;
        const id: string = req.params.id
        const product = await updateProductService(data, id)
        return res.status(200).json(product
            )
    } catch (error) {
        if(error instanceof AppError) {
            res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
export const deleteProductsController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        await deleteProductService(id)
        return res.status(200).json({})
    } catch (error) {
        if(error instanceof AppError) {
            res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
export const updateInventoryProductsController = async (req: Request, res: Response) => {
    try {
        const iventory: number = req.body
        const bar_code: string = req.params.id
        const iventoryProduct = await updateIventoryProductService(iventory, bar_code)
        return res.status(201).json(iventoryProduct)
    } catch (error) {
        if(error instanceof AppError) {
            res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
export const listProducIdProductsController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const product = await listProductIdService(id);
        return res.status(200).json(product)
    } catch (error) {
        if(error instanceof AppError) {
            res.status(error.statusCode).json({status: error.statusCode, message: error.message})
        }
    }
}
// export const createProductsController = async (req: Request, res: Response) => {
//     try {
        
//     } catch (error) {
//         if(error instanceof AppError) {
//             res.status(error.statusCode).json({status: error.statusCode, message: error.message})
//         }
//     }
// }
// export const createProductsController = async (req: Request, res: Response) => {
//     try {
        
//     } catch (error) {
//         if(error instanceof AppError) {
//             res.status(error.statusCode).json({status: error.statusCode, message: error.message})
//         }
//     }
// }