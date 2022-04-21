import { Body, Controller, Get, Param, Patch, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../services/user.service';
import { User } from '../schemas/user.schema';

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
  async createUser(@Body() userObj: User): Promise<User> {
      return this.usersService.createUser(userObj.name, userObj.email, userObj.password);
  }

  @Patch(':userId')
  async updateUser(@Param('userId') _id: string, @Body() userObj: User): Promise<User> {
      return this.usersService.updateUser(_id, userObj);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
