import { Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseLikeService } from '../services/course-like.service';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('course-likes')
@Controller('course-likes')
export class CourseLikeController {
    constructor(private readonly service: CourseLikeService) {}

    @Post(':courseId')
    @UseGuards(AuthenticationGuard)
    toggle(@Request() req: any, @Param('courseId') courseId: number) {
        return this.service.toggle(req.user.id, courseId);
    }

    @Get(':courseId')
    getByCourse(@Param('courseId') courseId: number) {
        return this.service.getByCourse(courseId);
    }
}
