import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user.module';
import { TagModule } from './tag.module';
import { CategoryModule } from './category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/finance'),
    UserModule,
    TagModule,
    CategoryModule
  ],  
})
export class AppModule {}
