import AppDataSource from "../../data-source";
import Products from "../../entities/products.entitie";
import Categorie from "../../entities/categories.entitie";
import { AppError } from "../../errors";
import { IProductsRequest } from "../../interfaces";

export const createProductService = async (data:IProductsRequest):Promise<Products> => {
    const categoryRepository = AppDataSource.getRepository(Categorie);
    const productsRepository = AppDataSource.getRepository(Products);
    const findCategorie = await categoryRepository.findOneBy({name: data.categorie_name});
    if(!findCategorie) {
        throw new AppError("Categorie não exite", 400)
    }
    const verifyBarCode = await productsRepository.findOneBy({bar_code: data.bar_code})
    const verifyModel =  await productsRepository.findOneBy({model: data.model})
    if(verifyBarCode) {
        throw new AppError("Bar code já existe")
    }
    if(verifyModel) {
        throw new AppError("model já existe")
    }
    const newProduct = productsRepository.create({...data, categorie: findCategorie});
    await productsRepository.save(newProduct);
    return newProduct
}