import express from "express";
import { handleErrorMiddleware } from "./middlewares";
import appRoutes from "./routes";
import "express-async-errors"


const app = express()
app.use(express.json());
appRoutes(app)
app.use(handleErrorMiddleware)


export default app