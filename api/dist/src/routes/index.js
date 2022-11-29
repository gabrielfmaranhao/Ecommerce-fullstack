"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_routes_1 = require("./users.routes");
const session_routes_1 = require("./session.routes");
const categories_routes_1 = require("./categories.routes");
const product_routes_1 = require("./product.routes");
const appRoutes = (app) => {
    app.use("/user", users_routes_1.userRoutes);
    app.use("/login", session_routes_1.sessionRoutes);
    app.use("/categorie", categories_routes_1.categoriesRoutes);
    app.use("/product", product_routes_1.producsRoutes);
};
exports.default = appRoutes;
