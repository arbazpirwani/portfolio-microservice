import { Controller, Get } from "routing-controllers";

@Controller()
export class HomeController {
  constructor() {}

  @Get("/health")
  async health(): Promise<any> {
    return {
      status: true,
      message: 'Iam Alive'
    };
  }
}
