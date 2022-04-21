import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type TransactionHistoryDocument = TransactionHistory & Document;

@Schema({collection: 'transaction_history'})
export class TransactionHistory {
    @Prop()
    _id: string;

    @Prop({ required: true })
    category_id: string;

    @Prop()
    tag_id: string;
    
    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    amount: schema.Types.Decimal128;

    @Prop({ required: true })
    transaction_date: Date;

    @Prop({ required: true })
    transaction_type: TransactionType;

    @Prop({ required: true })
    type: Type;

    @Prop()
    number_installment: schema.Types.Decimal128;

    @Prop()
    current_installment: schema.Types.Decimal128;

    @Prop()
    reference_id: string;

    @Prop({ required: true })
    paid: boolean;

    @Prop()
    preferred_account: string;

    @Prop({ required: true })
    fixed: boolean;
    
}

enum TransactionType {
    expense = "expense",    
    earning = "earning"    
}

enum Type {
    in_cash = "in_cash",    
    installment = "installment"    
}


export const TransactionHistorySchema = SchemaFactory.createForClass(TransactionHistory);

TransactionHistorySchema.pre<TransactionHistory>("save", function(next) {
    this._id = uuidv4();
    next();
});

