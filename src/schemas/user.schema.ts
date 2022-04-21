import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema({collection: 'user'})
export class User {
    @Prop()
    _id?: string;
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);


UserSchema.pre<User>("save", function(next) {
      this._id = uuidv4();    
      const SALT_FACTOR = 5;
  
      bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) return next(err);
  
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err);
        this.password = hash;        
        next();
      });
    });
});
  

UserSchema.methods.comparePassword = function(inputPassword, cb) {
    bcrypt.compare(inputPassword, this.password, (err, isMatch) => {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
};