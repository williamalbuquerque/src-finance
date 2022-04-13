import { Injectable } from "@nestjs/common";
import { TagDto } from "../dto/tag.dto";
import { Tag } from "../schemas/tag.schema";
import { TagRepository } from "../repositories/tag.repository";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TagService {
    constructor(private readonly tagsRepository: TagRepository) {}

    async getTagById(_id: string): Promise<Tag> {
        return this.tagsRepository.findOne({ _id })
    }

    async getTags(): Promise<Tag[]> {
        return this.tagsRepository.find({});
    }

    async createTag(name: string, user_id: string): Promise<Tag> {
        return this.tagsRepository.create({
          _id: uuidv4(),
          name,  
          user_id
        })
    }

    async updateTag(_id: string, tagUpdates: TagDto): Promise<Tag> {
        return this.tagsRepository.findOneAndUpdate({ _id }, tagUpdates);
    } 
    
    async deleteTag(_id: string): Promise<Tag> {
        return this.tagsRepository.findOneAndDelete({ _id });
    }
}