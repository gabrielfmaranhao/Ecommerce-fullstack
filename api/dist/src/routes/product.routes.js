"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producsRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const serializers_1 = require("../serializers");
exports.producsRoutes = (0, express_1.Router)();
exports.producsRoutes.get("", controllers_1.listProductsController); // list products (SEM PERMISSÃO DE ADM)
exports.producsRoutes.get("/:id", controllers_1.listProducIdProductsController); // list product ID ( SEM PERMISSÃO DE ADM)
exports.producsRoutes.post("", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.verifyIsAdmMiddleware, (0, middlewares_1.serializerMiddleware)(serializers_1.createProductSerializer), controllers_1.createProductsController); // Create product (só ADM)
exports.producsRoutes.patch("/:id", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.verifyIsAdmMiddleware, (0, middlewares_1.serializerMiddleware)(serializers_1.updateProductSerializer), controllers_1.updateProductsController); // update product (só ADM)
exports.producsRoutes.delete("/:id", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.verifyIsAdmMiddleware, controllers_1.deleteProductsController); // delete product (só ADM)
exports.producsRoutes.patch("/:bar_code", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.verifyIsAdmMiddleware, (0, middlewares_1.serializerMiddleware)(serializers_1.updateIventoryProductSerializer), controllers_1.updateInventoryProductsController); // update invetory (Só ADM)
