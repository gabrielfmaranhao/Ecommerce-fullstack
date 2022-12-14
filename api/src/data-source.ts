import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = process.env.NODE_ENV === "test" ?
    new DataSource({
        type:"sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    }):
    new DataSource({
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: true,
        logging: true,
        synchronize: false,
        entities: process.env.NODE_ENV === "production" ? ["dist/src/entities/*.js"] : ["src/entities/*.ts"],
        migrations: process.env.NODE_ENV === "production" ? ["dist/src/migrations/*.js"] : ["src/migrations/*.ts"]
    });

    export default AppDataSource