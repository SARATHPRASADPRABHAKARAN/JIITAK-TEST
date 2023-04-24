import {  IsNotEmpty, MinLength } from "class-validator";

export class loginUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

}