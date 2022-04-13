import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../schemas/category.schema';
import { CategoryDto } from '../dto/category.dto';

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
  async createCategory(@Body() createCategoryDto: Category): Promise<Category> {
      return this.categoryService.createCategory(createCategoryDto);
  }

  @Patch(':categoryId')
  async updateCategory(@Param('categoryId') _id: string, @Body() updateCategoryDto: CategoryDto): Promise<Category> {
      return this.categoryService.updateCategory(_id, updateCategoryDto);
  }

  @Delete(':categoryId')
  async deleteCategory(@Param('categoryId') _id: string): Promise<Category> {
      return this.categoryService.deleteCategory(_id);
  }
  
}
