import { DataSource } from "typeorm";

// Import Entities Here

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.PORT as unknown as number,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.APPLICATION_DATABASE,
});

export default AppDataSource;
