import { userRoutes } from "./users.routes";
import { Express } from "express";
import { sessionRoutes } from "./session.routes";
import { categoriesRoutes } from "./categories.routes";
import { producsRoutes } from "./product.routes";

const appRoutes = (app : Express) => {
    app.use("/user", userRoutes)
    app.use("/login", sessionRoutes)
    app.use("/categorie", categoriesRoutes)
    app.use("/product", producsRoutes)
}

export default appRoutes