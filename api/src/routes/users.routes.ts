import { Router } from "express";
import { createUserController, deleteUserController, listIdUserController, listUserController, profileUserController, updateUserController } from "../controllers";
import { serializerMiddleware, verifyAuthTokenMiddleware, verifyIsAdmMiddleware } from "../middlewares";
import { createUserSerializer, updateUserSerializer } from "../serializers";

export const userRoutes = Router();
userRoutes.get("",verifyAuthTokenMiddleware, verifyIsAdmMiddleware,listUserController) 
userRoutes.get("/profile", verifyAuthTokenMiddleware, profileUserController)   
userRoutes.get("/:id", verifyAuthTokenMiddleware, verifyIsAdmMiddleware, listIdUserController)
userRoutes.post("", serializerMiddleware(createUserSerializer), createUserController)  
userRoutes.patch("/:id", verifyAuthTokenMiddleware ,serializerMiddleware(updateUserSerializer), updateUserController)  
userRoutes.delete("/:id", verifyAuthTokenMiddleware, verifyIsAdmMiddleware ,deleteUserController)  
