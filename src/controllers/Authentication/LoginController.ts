import { Controller, Post, Body } from "routing-controllers";
import { ILoginRequest } from "./request/ILoginRequest";

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
  async login(@Body() request: ILoginRequest): Promise<any> {
    return {
      message: "Login End Point",
    };
  }
}
