import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Account, AccountDocument } from "../schemas/account.schema";

@Injectable()
export class AccountRepository {
    constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}
    private readonly logger = new Logger(AccountRepository.name)

    async findOne(accountFilterQuery: FilterQuery<Account>): Promise<Account> {
        return this.accountModel.findOne(accountFilterQuery);
    }

    async create(account: Account): Promise<Account> {
        const newAccount = new this.accountModel(account);
        return newAccount.save()
    }


}