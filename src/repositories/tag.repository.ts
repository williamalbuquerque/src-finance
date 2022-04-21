import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Tag, TagDocument } from "../schemas/tag.schema";

@Injectable()
export class TagRepository {
    constructor(@InjectModel(Tag.name) private tagModel: Model<TagDocument>) {}
    private readonly logger = new Logger(TagRepository.name)

    async findOne(tagFilterQuery: FilterQuery<Tag>): Promise<Tag> {
        return this.tagModel.findOne(tagFilterQuery);
    }

    async find(tagFilterQuery: FilterQuery<Tag>): Promise<Tag[]> {
        return this.tagModel.find(tagFilterQuery)
    }

    async create(tag: Tag): Promise<Tag> {
        const newTag = new this.tagModel(tag);
        return newTag.save().catch(
            
        )
    }

    async findOneAndUpdate(tagFilterQuery: FilterQuery<Tag>, tag: Partial<Tag>): Promise<Tag> {
        return this.tagModel.findOneAndUpdate(tagFilterQuery, tag, { new: true });
    }

    async findOneAndDelete(tagFilterQuery: FilterQuery<Tag>): Promise<Tag> {
        return this.tagModel.findOneAndDelete(tagFilterQuery);
    }
}