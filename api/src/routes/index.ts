import { userRoutes } from "./users.routes";
import { Express } from "express";
import { sessionRoutes } from "./session.routes";

const appRoutes = (app : Express) => {
    app.use("/user", userRoutes)
    app.use("/login", sessionRoutes)
}

export default appRoutes