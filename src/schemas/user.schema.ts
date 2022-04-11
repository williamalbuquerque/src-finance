import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema({collection: 'user'})
export class User {
    @Prop()
    _id: string;
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);


UserSchema.pre<User>("save", function(next) {
    const user = this,
      SALT_FACTOR = 5;
  
      bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) return next(err);
  
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
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