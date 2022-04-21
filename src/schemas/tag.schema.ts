import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type TagDocument = Tag & Document;

@Schema({collection: 'tag'})
export class Tag {
    @Prop()
    _id?: string;
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    user_id: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);

TagSchema.pre<Tag>("save", function(next) {
    this._id = uuidv4();
    next();
});



