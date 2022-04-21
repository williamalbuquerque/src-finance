import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../schemas/category.schema';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':categoryId')
  async getCategory(@Param('categoryId') _id: string): Promise<Category> {
    return this.categoryService.getCategoryById(_id);
  }

  @Get()
  async getCategorys(): Promise<Category[]> {
      return this.categoryService.getCategorys();
  }

  @Post('create') 
  async createCategory(@Body() categoryObj: Category): Promise<Category> {
      return this.categoryService.createCategory(categoryObj);
  }

  @Patch(':categoryId')
  async updateCategory(@Param('categoryId') _id: string, @Body() categoryObj: Category): Promise<Category> {
      return this.categoryService.updateCategory(_id, categoryObj);
  }

  @Delete(':categoryId')
  async deleteCategory(@Param('categoryId') _id: string): Promise<Category> {
      return this.categoryService.deleteCategory(_id);
  }
  
}
