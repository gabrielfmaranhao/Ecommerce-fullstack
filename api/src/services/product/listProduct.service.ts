import AppDataSource from "../../data-source";
import Products from "../../entities/products.entitie";


export const listProductService = ():Promise<Products[]> => {
    const productRepository = AppDataSource.getRepository(Products);
    return productRepository.find();
}