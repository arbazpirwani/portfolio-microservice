import { Controller, Get, UseBefore } from "routing-controllers";

import { AuthMiddleware } from "../../middleware/AuthMiddleware";

@Controller("/api/v1/orders")
@UseBefore(AuthMiddleware)
export class OrdersController {
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
      message: "Orders Controllers",
    };
  }
}
