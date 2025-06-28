import { Controller, Get, UseBefore } from "routing-controllers";

import { AuthMiddleware } from "../../middleware/AuthMiddleware";

@Controller("/api/v1/assets")
@UseBefore(AuthMiddleware)
export class AssetsController {
  /**
   * Controller Contructor
   */
  constructor() {}

  /**
   * Getting the Initial JSON response
   */
  @Get("/")
  async get(): Promise<any> {
    return {
      message: "Get Portfolio Assests for the user",
    };
  }
}
