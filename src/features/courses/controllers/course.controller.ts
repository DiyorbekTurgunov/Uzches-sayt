import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseService } from '../services/course.service';
import { CourseCreateDto } from '../dto/course/course-create.dto';
import { CourseUpdateDto } from '../dto/course/course-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('courses')
@Controller('courses')
export class CourseController {
    constructor(private readonly service: CourseService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: CourseCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: CourseUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
