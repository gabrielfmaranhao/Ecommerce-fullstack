import AppDataSource from "../../data-source";
import Products from "../../entities/products.entitie";
import { AppError } from "../../errors";


export const listProductIdService = async (id:string):Promise<Products> => {
    const productRepository = AppDataSource.getRepository(Products);
    const findProduct = await productRepository.findOneBy({id});
    if(!findProduct) {
        throw new AppError("Product is not exist")
    }
    return findProduct
}