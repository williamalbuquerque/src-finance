import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { User, UserSchema } from "./schemas/user.schema";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/finance'), 
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [
    UserRepository, UserService
  ],
})
export class AppModule {}
