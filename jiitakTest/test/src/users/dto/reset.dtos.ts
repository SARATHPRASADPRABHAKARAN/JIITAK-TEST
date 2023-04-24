import {  IsNotEmpty, MinLength, max } from "class-validator";

export class ResetUserDto {
  @IsNotEmpty()
  
  email: string;

  @IsNotEmpty()
  
  password: string;

}