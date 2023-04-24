import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
    import { CreateUserDto } from 'src/users/dto/users.dtos';
    import { UpdateUserDto } from 'src/users/dto/users.updatedtos';
    import { loginUserDto } from 'src/users/dto/login.dtos';
    import { UsersService } from 'src/users/services/users/users.service';
    import { ResetUserDto } from 'src/users/dto/reset.dtos';
    
    @Controller('users')
    export class UsersController {
      constructor(private readonly userService: UsersService) {}
      
      
      
      @Put(':id')
      @UsePipes(ValidationPipe)
      updateUsers(@Param('id') id: string,@Body() createUserDto: CreateUserDto) {
        return this.userService.updateUser(+id,createUserDto);
      }


      @Post('reset')
      @UsePipes(ValidationPipe)
      resetUsers(@Body() resetUserDto: ResetUserDto) {
        return this.userService.ResetPassword(resetUserDto);
      }



      
      @Post('signup')
      @UsePipes(ValidationPipe)
      createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
      }
     
      @Post('login')
      @UsePipes(ValidationPipe)
      loginUsers(@Body() createUserDto: loginUserDto) {
        return this.userService.loginUser(createUserDto);
      }

    }