import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { TransactionHistory } from './transaction_history.schema';

export type AccountDocument = Account & Document;

@Schema({collection: 'account'})
export class Account {
    @Prop()
    _id?: string;

    @Prop({ required: true })
    user_id: string;
    
    @Prop({ required: true })
    name: string;

    @Prop()
    opening_balance?: schema.Types.Decimal128;    

    @Prop()
    icon?: string;

    @Prop()
    color?: string;

    @Prop({ required: true })
    type: Type;

    @Prop({ default: undefined})
    sub_type?: [string];

    @Prop()
    billing_cycle_day?: Number;

    @Prop()
    billing_due_day?: Number;

    @Prop()
    limit?: schema.Types.Decimal128;

    @Prop({ default: undefined})
    transaction_history?: [TransactionHistory];
}

enum Type {
    checking_account = "checking_account",    
    credit_card = "credit_card"    
}

export const AccountSchema = SchemaFactory.createForClass(Account);

AccountSchema.pre<Account>("save", function(next) {
    this._id = uuidv4();
    next();
});

