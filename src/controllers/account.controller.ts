import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { Account } from '../schemas/account.schema';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}



  @Post('create') 
  async createAccount(@Body() accountObj: Account): Promise<Account> {
      return this.accountService.createAccount(accountObj);
  }

  
}
