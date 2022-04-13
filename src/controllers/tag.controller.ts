import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { TagService } from '../services/tag.service';
import { Tag } from '../schemas/tag.schema';
import { TagDto } from '../dto/tag.dto';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get(':tagId')
  async getTag(@Param('tagId') _id: string): Promise<Tag> {
    return this.tagService.getTagById(_id);
  }

  @Get()
  async getTags(): Promise<Tag[]> {
      return this.tagService.getTags();
  }

  @Post('create') 
  async createTag(@Body() createTagDto: TagDto): Promise<Tag> {
      return this.tagService.createTag(createTagDto.name, createTagDto.user_id);
  }

  @Patch(':tagId')
  async updateTag(@Param('tagId') _id: string, @Body() updateTagDto: TagDto): Promise<Tag> {
      return this.tagService.updateTag(_id, updateTagDto);
  }

  @Delete(':tagId')
  async deleteTag(@Param('tagId') _id: string): Promise<Tag> {
      return this.tagService.deleteTag(_id);
  }
  
}
