import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CategoryDocument = Category & Document;

@Schema({collection: 'category'})
export class Category {
    @Prop()
    _id: string;

    @Prop({ required: true })
    user_id: string;
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    type: Type;

    @Prop()
    icon: string;

    @Prop()
    color: string;

    @Prop()
    sub_category: [string];
    
}

enum Type {
    expense = "expense",
    earning = "earning"
}

export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.pre<Category>("save", function(next) {
    this._id = uuidv4();
    next();
});

