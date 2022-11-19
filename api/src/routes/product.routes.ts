import { Router } from "express";
import { createProductsController, deleteProductsController, updateProductsController, listProductsController, updateInventoryProductsController, listProducIdProductsController} from "../controllers";
import { serializerMiddleware, verifyAuthTokenMiddleware, verifyIsAdmMiddleware } from "../middlewares";
import { createProductSerializer, updateIventoryProductSerializer, updateProductSerializer } from "../serializers";
export const producsRoutes = Router();

producsRoutes.get("", listProductsController) // list products (SEM PERMISSÃO DE ADM)
producsRoutes.get("/:id", listProducIdProductsController) // list product ID ( SEM PERMISSÃO DE ADM)
producsRoutes.post("", verifyAuthTokenMiddleware, verifyIsAdmMiddleware, serializerMiddleware(createProductSerializer), createProductsController) // Create product (só ADM)
producsRoutes.patch("/:id", verifyAuthTokenMiddleware, verifyIsAdmMiddleware, serializerMiddleware(updateProductSerializer), updateProductsController) // update product (só ADM)
producsRoutes.delete("/:id", verifyAuthTokenMiddleware, verifyIsAdmMiddleware, deleteProductsController) // delete product (só ADM)
producsRoutes.patch("/:bar_code", verifyAuthTokenMiddleware, verifyIsAdmMiddleware, serializerMiddleware(updateIventoryProductSerializer), updateInventoryProductsController) // update invetory (Só ADM)