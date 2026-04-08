import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseSectionService } from '../services/course-section.service';
import { CourseSectionCreateDto } from '../dto/course-section/course-section-create.dto';
import { CourseSectionUpdateDto } from '../dto/course-section/course-section-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('course-sections')
@Controller('course-sections')
export class CourseSectionController {
    constructor(private readonly service: CourseSectionService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: CourseSectionCreateDto) { return this.service.create(dto); }

    @Get()
    getAll(@Query('courseId') courseId?: number) { return this.service.getAll(courseId); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: CourseSectionUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
