import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/models/category.model';

@Controller('categories')
export class CategoryController {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  @Post()
  async createCategory(@Body() body: Category): Promise<Category> {
    const category = this.categoryRepo.create(body);
    return this.categoryRepo.save(category);
  }

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.categoryRepo.find();
  }

  @Get(':id')
  getCategory(@Param('id') id: string): Promise<Category> {
    return this.categoryRepo.findOneOrFail(id);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() body: Category,
  ): Promise<Category> {
    await this.categoryRepo.findOneOrFail(id);
    this.categoryRepo.update({ id: +id }, body);
    return this.categoryRepo.findOneOrFail(id);
  }
}
