import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseLessonService } from '../services/course-lesson.service';
import { CourseLessonCreateDto } from '../dto/course-lesson/course-lesson-create.dto';
import { CourseLessonUpdateDto } from '../dto/course-lesson/course-lesson-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('course-lessons')
@Controller('course-lessons')
export class CourseLessonController {
    constructor(private readonly service: CourseLessonService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: CourseLessonCreateDto) { return this.service.create(dto); }

    @Get()
    getAll(@Query('courseId') courseId?: number) { return this.service.getAll(courseId); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: CourseLessonUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
