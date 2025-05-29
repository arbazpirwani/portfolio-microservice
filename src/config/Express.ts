import { resolve } from "path";

import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";

import { useExpressServer } from "routing-controllers";

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

    // Setting Up the Application Controller
    this.setUpControllers();
  }

  /**
   * Setting Up the Controllers
   * For the Application
   */
  setUpControllers() {
    const controllersPath = resolve("dist", "controllers");
    useExpressServer(this.app, {
      controllers: [`${controllersPath}/*.js`],
    });
  }
}
