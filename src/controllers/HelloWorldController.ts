import { Controller, Get } from "routing-controllers";

@Controller('/hello-world')
export class HellowWorldController {
  /**
   * Controller Contructor
   */
  constructor () {}

  /**
   * Getting the Initial JSON response
   */
  @Get('/')
  async get () : Promise<any> {
    return {
      message: 'Welcome to Hellow world Micrservice'
    }
  }
}