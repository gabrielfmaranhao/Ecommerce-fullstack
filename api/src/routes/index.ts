import { userRoutes } from "./users.routes";
import { Express } from "express";

const appRoutes = (app : Express) => {
    app.use("/user", userRoutes)
}

export default appRoutes