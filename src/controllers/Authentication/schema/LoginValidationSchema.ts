import { IsEmail, IsString, validate } from "class-validator";
import { forEach, pick } from "lodash";

export class LoginValidationSchema {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  constructor(loginReqObj : any) {
    this.email = loginReqObj?.email;
    this.password = loginReqObj?.password;
  }
}

export const validateLoginRequest = async (loginReqObj: any) => {
  let validProductData = new LoginValidationSchema(loginReqObj);
  let validationResults = await validate(validProductData);
  let constraints : any = [];
  if (validationResults && validationResults.length > 0) {
    forEach(validationResults, (item) => {
      constraints.push(pick(item, "constraints", "property"));
    });
  }
  return constraints;
};
