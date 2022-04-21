import { Injectable } from "@nestjs/common";
import { Account } from "../schemas/account.schema";
import { AccountRepository } from "../repositories/account.repository";
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountService {
    constructor(private readonly accountRepository: AccountRepository) {}

    async createAccount(accountObj: Account): Promise<Account> {
        const {user_id, name, opening_balance, icon, color, type, sub_type, billing_cycle_day, billing_due_day} = accountObj;

        return this.accountRepository.create({
            user_id,
            name,
            opening_balance,
            icon,
            color,
            type,
            sub_type,
            billing_cycle_day,
            billing_due_day         
        })
    }

}