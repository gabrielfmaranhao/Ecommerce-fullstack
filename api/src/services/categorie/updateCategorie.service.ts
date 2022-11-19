import Categorie from "../../entities/categories.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { ICategorieUpdate } from "../../interfaces/categories";

export const updateCategorieService = async(data:ICategorieUpdate, name:string):Promise<Categorie> => {
    const categorieRepository = AppDataSource.getRepository(Categorie);
    const findCategorie = await categorieRepository.findOneBy({name});
    if(!findCategorie) {
        throw new AppError("Categorie não existe")
    }
    if(data.name) {
        const findData = await categorieRepository.findOneBy({name: data.name});
        if(findData) {
            throw new AppError("Name de categorie já existe")
        }
        await categorieRepository.update(findCategorie.id,data);
        const categorie = await categorieRepository.findOneBy({name: data.name})
        return categorie!
    }
    await categorieRepository.update(findCategorie.id,data);
    const categorie = await categorieRepository.findOneBy({name})
    return categorie!
}