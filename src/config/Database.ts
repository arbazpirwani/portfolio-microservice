import "dotenv/config";
import { DataSource } from "typeorm";

// Import Migrations Here
import { UserDetails1751105368579 as UserDetails } from "../migrations/1751105368579-UserDetails";
import { UserLoginDetails1751109892722 as UserLoginDetails } from "../migrations/1751109892722-UserLoginDetails";
import { CreateOrderDetail1751123456789 as CreateOrderDetail } from "../migrations/1751123456789-CreateOrderDetail";

// Import Entities Here
import { UserDetailEntity } from "../entities/UserDetailEntity";
import { UserLoginDetailsEntity } from "../entities/UserLoginDetailsEntity";
import { OrderDetailEntity } from "../entities/OrderDetailEntity";

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT ?? "5432", 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.APPLICATION_DATABASE,

    // Explicitly list the migration classes you want run
    migrations: [
        UserDetails,
        UserLoginDetails,
        CreateOrderDetail,
    ],

    // List only the entities you actually use
    entities: [
        UserDetailEntity,
        UserLoginDetailsEntity,
        OrderDetailEntity,
    ],

    synchronize: false,    // off when using migrations
    logging: true,         // optional SQL logs
    migrationsRun: false,  // set to true to auto-run migrations on initialize()
});

export default AppDataSource;
