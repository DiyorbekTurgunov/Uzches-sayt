import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookCategoryService } from '../services/book-category.service';
import { BookCateCreateDto } from '../dtos/book-cate/book-cate-create.dto';
import { BookCateUpdateDto } from '../dtos/book-cate/book-cate-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('book-categories')
@Controller('book-categories')
export class BookCategoryController {
    constructor(private readonly service: BookCategoryService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: BookCateCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: BookCateUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
