import { Injectable } from "@nestjs/common";
import { CategoryDto } from "../dto/category.dto";
import { Category } from "../schemas/category.schema";
import { CategoryRepository } from "../repositories/category.repository";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoryService {
    constructor(private readonly categorysRepository: CategoryRepository) {}

    async getCategoryById(_id: string): Promise<Category> {
        return this.categorysRepository.findOne({ _id })
    }

    async getCategorys(): Promise<Category[]> {
        return this.categorysRepository.find({});
    }

    async createCategory(newCategory: Category): Promise<Category> {
        return this.categorysRepository.create(newCategory);
    }

    async updateCategory(_id: string, categoryUpdates: CategoryDto): Promise<Category> {
        return this.categorysRepository.findOneAndUpdate({ _id }, categoryUpdates);
    } 
    
    async deleteCategory(_id: string): Promise<Category> {
        return this.categorysRepository.findOneAndDelete({ _id });
    }
}