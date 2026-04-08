import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseReviewService } from '../services/course-review.service';
import { CourseReviewCreateDto } from '../dto/course-review/course-review-create.dto';
import { CourseReviewUpdateDto } from '../dto/course-review/course-review-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('course-reviews')
@Controller('course-reviews')
export class CourseReviewController {
    constructor(private readonly service: CourseReviewService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Request() req: any, @Body() dto: CourseReviewCreateDto) {
        return this.service.create(req.user.id, dto);
    }

    @Get()
    getAll(@Query('courseId') courseId?: number) { return this.service.getAll(courseId); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: CourseReviewUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
