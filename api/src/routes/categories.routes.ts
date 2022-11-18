import { Router } from "express";
import { createCategorieController, deleteCategorieController,listCategorieController, updateCategorieController, listProductCategorieController } from "../controllers";
import { verifyAuthTokenMiddleware, verifyIsAdmMiddleware, serializerMiddleware } from "../middlewares";
import { createCategorieSerializer, updateCategorieSerializer } from "../serializers";

export const categoriesRoutes = Router();

categoriesRoutes.get("", listCategorieController) // listar todas as categories (sem Permissão de Adm)
categoriesRoutes.get("/produtcs/:name", listProductCategorieController) // listar todos os produtos por categorie ( sem permissão de adm )
categoriesRoutes.post("", verifyAuthTokenMiddleware, verifyIsAdmMiddleware, serializerMiddleware(createCategorieSerializer), createCategorieController) // Criar nova categorie ( só ADM )
categoriesRoutes.patch("/:name", verifyAuthTokenMiddleware, verifyIsAdmMiddleware, serializerMiddleware(updateCategorieSerializer), updateCategorieController) // atualizar Catetorie ( Só ADM)
categoriesRoutes.delete("/:name", verifyAuthTokenMiddleware, verifyIsAdmMiddleware, deleteCategorieController) // soft delete de uma categorie (Só adm)