import { Router } from "express";
import { sessionLoginController } from "../controllers";
import { serializerMiddleware } from "../middlewares";
import { sessionLoginSerializer } from "../serializers";

export const sessionRoutes = Router();
sessionRoutes.post("",serializerMiddleware(sessionLoginSerializer),sessionLoginController)