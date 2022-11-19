import Categorie from "../../entities/categories.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import Products from "../../entities/products.entitie";

export const listProductCategorieService = async (name:string):Promise<Products[]> => {
    const categorieRepository = AppDataSource.getRepository(Categorie);
    const productRepository = AppDataSource.getRepository(Products);
    const findCategorie = await categorieRepository.findOneBy({name});
    if(!findCategorie) {
        throw new AppError("Categorie não existe", 400)
    }
    if(findCategorie.isActive === false) {
        throw new AppError("Categorie não existe", 400)
    }
    const findProducts = await productRepository.find({relations: {categorie:true}, where: { categorie: {id: findCategorie.id}}});
    return findProducts
}
