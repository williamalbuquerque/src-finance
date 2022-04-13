import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TagDocument = Tag & Document;

@Schema({collection: 'tag'})
export class Tag {
    @Prop()
    _id: string;
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    user_id: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);


