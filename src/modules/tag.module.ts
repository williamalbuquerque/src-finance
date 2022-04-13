import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagController } from '../controllers/tag.controller';
import { TagService } from '../services/tag.service';
import { TagRepository } from '../repositories/tag.repository';
import { Tag, TagSchema } from "../schemas/tag.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }])],
  controllers: [TagController],
  providers: [TagRepository, TagService],
})
export class TagModule {}
