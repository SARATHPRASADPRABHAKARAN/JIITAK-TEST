import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UpdateUserDto } from 'src/users/dto/users.updatedtos';
import { loginUserDto } from 'src/users/dto/login.dtos';
import { ResetUserDto } from 'src/users/dto/reset.dtos';
import { error } from 'console';
import { PassThrough } from 'stream';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
      
  createUser(createUserDto: CreateUserDto) {
    try{
        const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
    }
    catch(error){
        console.log(error)
    }
    
  }


 async loginUser(createUserDto: loginUserDto) {
    try{
     const username:string = createUserDto.username
     const pasword:string = createUserDto.password
     console.log(pasword);
     
     const user= await  this.userRepository.findOne({where:{username:username}})
     console.log(user)
     if(pasword==user.password)
     {
     
      return user;
     }
     else{
      const message1={
        message:"incorrect password"
        
      }
      return message1
     }
    }
    catch(error){
        console.log(error)
    }
    
  }


  async ResetPassword(resetUserDto: ResetUserDto) {
    try{
     const email:string = resetUserDto.email;
     const password:string = resetUserDto.password;
     console.log(password);
     
     const user= await  this.userRepository.findOne({where:{email:email}})
     if(user !=null){
      var createUserDto ={
        username:user.username,
        email:user.email,
        password:password
        
      }
      return this.userRepository.update(user.id,createUserDto);
     }
     else{
      const message1={
        message:"invalid email"
        
      }
      return message1;
     }
    }
    catch(error){
        console.log(error)
        return "invalid email";
    }
    
  }
    
  updateUser(id:number,createUserDto: UpdateUserDto) {
  
   return this.userRepository.update(id,createUserDto);

  }

  findUsersById(id: number) {
    return this.userRepository.findOne({where:{id:id}});
  }
}