import { Router } from "express";
import { createUserController, deleteUserController, listIdUserController, listUserController, updateUserController } from "../controllers";
import { serializerMiddleware, verifyAuthTokenMiddleware, verifyIsAdmMiddleware } from "../middlewares";
import { createUserSerializer, updateUserSerializer } from "../serializers";

export const userRoutes = Router();
userRoutes.get("",verifyAuthTokenMiddleware, verifyIsAdmMiddleware,listUserController) // list todos os usuários precisa ser ADM 
userRoutes.get("/:id", verifyAuthTokenMiddleware, verifyIsAdmMiddleware,listIdUserController) // list usuário com id passado (PRECISA SER ADM)
userRoutes.post("", serializerMiddleware(createUserSerializer), createUserController) // create usuário (não precisa ser adm)
userRoutes.patch("/:id", verifyAuthTokenMiddleware ,serializerMiddleware(updateUserSerializer), updateUserController) // atualiza usuário (ADM atualiza todo mundo não adm só atualiza a si própio e não pode atualizar para virar adm)
userRoutes.delete("/:id", verifyAuthTokenMiddleware, verifyIsAdmMiddleware ,deleteUserController) // faz um softdelete de um usuário (Só adm pode deletar)
