import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseCategoryService } from '../services/course-category.service';
import { CourseCateCreateDto } from '../dto/course-cate/course-cate-create.dto';
import { CourseCateUpdateDto } from '../dto/course-cate/course-cate-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('course-categories')
@Controller('course-categories')
export class CourseCategoryController {
    constructor(private readonly service: CourseCategoryService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: CourseCateCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: CourseCateUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
