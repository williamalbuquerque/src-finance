import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user.module';
import { TagModule } from './tag.module';
import { CategoryModule } from './category.module';
import { AccountModule } from './account.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/finance'),
    UserModule,
    TagModule,
    CategoryModule,
    AccountModule
  ],  
})
export class AppModule {}
