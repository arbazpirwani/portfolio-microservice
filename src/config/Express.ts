import { resolve } from "path";

import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";

import { useExpressServer } from "routing-controllers";

import AppDataSource from "./Database";
import logger from "../common/logging";

export class ExpressConfig {
  /**
   * @public
   * @description Express App instance
   */
  public app: express.Express;

  /**
   * Express Config Constructor
   */
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyparser.json({ limit: "200kb" }));
    this.app.use(bodyparser.urlencoded({ extended: false }));

    // initializing database connection
    this.#loadDatabaseConnection();

    // Setting Up the Application Controller
    this.setUpControllers();

  }

  /**
   * @method private
   * Loading the Database connection For the Application
   */
  #loadDatabaseConnection() {
    AppDataSource.initialize()
      .then(() => logger.info(`Database connection initialized successfully`))
      .catch((error) => {
        logger.error(`Database initialization failed ! ${error?.message}`);
        // Exit the Application if there is any error occured in the database initialization
        process.exit(1);
      });
  }

  /**
   * Setting Up the Controllers
   * For the Application
   */
  setUpControllers() {
    const controllersPath = resolve("dist", "controllers");
    useExpressServer(this.app, {
      controllers: [`${controllersPath}/**/*.js`],
    });
  }
}
