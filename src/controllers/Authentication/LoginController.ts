import { Controller, Post } from "routing-controllers";

@Controller("/api/v1/login")
export class LoginController {
  /**
   * Controller Contructor
   */
  constructor() {}

  /**
   * Make Login
   */
  @Post("/")
  async login(): Promise<any> {
    return {
      message: "Login End Point",
    };
  }
}
