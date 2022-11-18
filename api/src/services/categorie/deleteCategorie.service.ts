import Categorie from "../../entities/categories.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";

export const deleteCategorieService = async(name:string):Promise<void> => {
    const categorieRepository = AppDataSource.getRepository(Categorie);
    const findCategorie = await categorieRepository.findOneBy({name});
    if(!findCategorie) {
        throw new AppError("Categorie não existe", 401)
    }
    if(!findCategorie.isActive) {
        throw new AppError("Categorie não existe", 401)
    }
    await categorieRepository.update(findCategorie.id,{isActive: false})
}