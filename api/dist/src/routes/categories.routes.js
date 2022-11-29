"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const serializers_1 = require("../serializers");
exports.categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes.get("", controllers_1.listCategorieController); // listar todas as categories (sem Permissão de Adm)
exports.categoriesRoutes.get("/produtcs/:name", controllers_1.listProductCategorieController); // listar todos os produtos por categorie ( sem permissão de adm )
exports.categoriesRoutes.post("", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.verifyIsAdmMiddleware, (0, middlewares_1.serializerMiddleware)(serializers_1.createCategorieSerializer), controllers_1.createCategorieController); // Criar nova categorie ( só ADM )
exports.categoriesRoutes.patch("/:name", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.verifyIsAdmMiddleware, (0, middlewares_1.serializerMiddleware)(serializers_1.updateCategorieSerializer), controllers_1.updateCategorieController); // atualizar Catetorie ( Só ADM)
exports.categoriesRoutes.delete("/:name", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.verifyIsAdmMiddleware, controllers_1.deleteCategorieController); // soft delete de uma categorie (Só adm)
