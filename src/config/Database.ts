import { DataSource } from "typeorm";

// Import Migrations Here
import { UserDetails1751105368579 as UserDetails } from "../migrations/1751105368579-UserDetails";

// Import Entities Here

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.PORT as unknown as number,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.APPLICATION_DATABASE,
  migrations: [
    UserDetails
  ]
});

export default AppDataSource;
