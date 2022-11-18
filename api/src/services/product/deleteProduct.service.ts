import AppDataSource from "../../data-source";
import Products from "../../entities/products.entitie";
import { AppError } from "../../errors";


export const deleteProductService = async (id:string):Promise<void> => {
    const productRepository = AppDataSource.getRepository(Products);
    const findproduct = await productRepository.findOneBy({id});
    if(!findproduct) {
        throw new AppError("Product is not exist")
    }
    await productRepository.update(id,{isActive:false})
}