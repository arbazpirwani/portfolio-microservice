import { ExpressConfig } from "./Express";

import logger from "../common/logging";

export class Application {
  /**
   * Application Server
   */
  server: any;

  /**
   * Express Config
   */
  express: ExpressConfig;

  /**
   * Listening Port
   */
  listeningPort: number = (process.env.PORT as unknown as number) || 3000;

  /**
   * Application Constructor
   */
  constructor() {
    this.express = new ExpressConfig();
    this.server = this.express.app.listen(this.listeningPort, () => {
      logger.info(
        `Express Server Started ! http://localhost:${this.listeningPort}`
      );
    });
  }
}
