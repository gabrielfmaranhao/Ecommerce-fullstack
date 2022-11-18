import AppDataSource from "../../data-source";
import Products from "../../entities/products.entitie";

import { AppError } from "../../errors";


export const updateIventoryProductService = async (iventory: number, bar_code: string):Promise<Products> => {
    const productRepository = AppDataSource.getRepository(Products);
    const findproduct = await productRepository.findOneBy({bar_code}); 
    if(!findproduct) {
        throw new AppError("Product is not exist")
    }
    await productRepository.update(findproduct.id,{iventory})
    const product = await productRepository.findOneBy({bar_code});
    return product!
}