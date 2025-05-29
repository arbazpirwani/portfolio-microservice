import { Controller, Get } from "routing-controllers";

@Controller()
export class HomeController {
  constructor() {}

  @Get("/")
  async home(): Promise<any> {
    return {
      message: "Welcome to Express Micro service",
    };
  }
}
