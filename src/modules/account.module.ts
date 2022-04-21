import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from '../controllers/account.controller';
import { AccountService } from '../services/account.service';
import { AccountRepository } from '../repositories/account.repository';
import { Account, AccountSchema } from "../schemas/account.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }])],
  controllers: [AccountController],
  providers: [AccountRepository, AccountService],
})
export class AccountModule {}
