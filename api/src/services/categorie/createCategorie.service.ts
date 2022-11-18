import Categorie from "../../entities/categories.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { ICategoriesRequest } from "../../interfaces";

export const createCategorieService = async (data:ICategoriesRequest):Promise<Categorie> => {
    const categorieRepository = AppDataSource.getRepository(Categorie);
    const findCategorie = await categorieRepository.findOneBy({name: data.name});
    if(findCategorie) {
        throw new AppError("Categorie já existe", 401)
    }

    const categorie = categorieRepository.create({name: data.name});
    await categorieRepository.save(categorie);
    return categorie
}



