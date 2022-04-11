import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../schemas/user.schema';
import { UserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get(':userId')
  async getUser(@Param('userId') _id: string): Promise<User> {
    return this.usersService.getUserById(_id);
  }

  @Get()
  async getUsers(): Promise<User[]> {
      return this.usersService.getUsers();
  }

  @Post('register') 
  async createUser(@Body() createUserDto: UserDto): Promise<User> {
      return this.usersService.createUser(createUserDto.name, createUserDto.email, createUserDto.password);
  }

  @Patch(':userId')
  async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UserDto): Promise<User> {
      return this.usersService.updateUser(userId, updateUserDto);
  }
}
