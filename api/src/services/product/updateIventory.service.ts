import AppDataSource from "../../data-source";
import Products from "../../entities/products.entitie";
import Categorie from "../../entities/categories.entitie";
import { AppError } from "../../errors";

import { IProductsUpdate } from "../../interfaces/products";

export const updateProductService = async (data:IProductsUpdate, id:string):Promise<Products> => {
    const categoryRepository = AppDataSource.getRepository(Categorie);
    const productsRepository = AppDataSource.getRepository(Products);
    const findProduct = await productsRepository.findOneBy({id});
    if(!findProduct) {
        throw new AppError("product is not exists")
    }
    const verifyCategory = await categoryRepository.findOneBy({name: data.categorie_name});
    const verifyBarCode = await productsRepository.findOneBy({bar_code: data.bar_code})
    const verifyModel = await productsRepository.findOneBy({model: data.model})
    if(!verifyCategory) {
        throw new AppError("Categorie is not exists")
    }
    if(verifyBarCode && verifyBarCode.bar_code !== findProduct.bar_code) {
        throw new AppError("Bar code is exist")
    }
    if(verifyModel && verifyModel.model !== findProduct.model) {
        throw new AppError("Model is exist")
    }
    await productsRepository.update(id,data)
    const product = await productsRepository.findOneBy({id});
    return product!
}