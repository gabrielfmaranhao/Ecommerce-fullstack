"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const AppDataSource = process.env.NODE_ENV === "test" ?
    new typeorm_1.DataSource({
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    }) :
    new typeorm_1.DataSource({
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
        logging: true,
        synchronize: false,
        entities: process.env.NODE_ENV === "production" ? ["dist/src/entities/*.js"] : ["src/entities/*.ts"],
        migrations: process.env.NODE_ENV === "production" ? ["dist/src/migrations/*.js"] : ["src/migrations/*.ts"]
    });
exports.default = AppDataSource;
