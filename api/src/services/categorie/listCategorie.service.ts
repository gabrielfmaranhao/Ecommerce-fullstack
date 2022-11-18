import Categorie from "../../entities/categories.entitie";
import AppDataSource from "../../data-source";



export const listCategorieService = async ():Promise<Categorie[]> => {
    const categorieRepository = AppDataSource.getRepository(Categorie);
    const findCategories = await categorieRepository.find();
    return findCategories
}