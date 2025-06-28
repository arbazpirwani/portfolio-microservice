import { Controller, Get, UseBefore } from "routing-controllers";

import { AuthMiddleware } from "../../middleware/AuthMiddleware";

@Controller("/api/v1/portfolio")
@UseBefore(AuthMiddleware)
export class PortfolioController {
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
      message: "Portfolio Controller by getting the USER ID",
    };
  }
}
