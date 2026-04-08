import { Body, Controller, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserLessonService } from '../services/user-lesson.service';
import { UserLessonUpdateDto } from '../dto/user-lesson/user-lesson-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('user-lessons')
@Controller('user-lessons')
@UseGuards(AuthenticationGuard)
export class UserLessonController {
    constructor(private readonly service: UserLessonService) {}

    @Post(':lessonId')
    start(@Request() req: any, @Param('lessonId') lessonId: number) {
        return this.service.start(req.user.id, lessonId);
    }

    @Get('my')
    getMyLessons(@Request() req: any) {
        return this.service.getMyLessons(req.user.id);
    }

    @Patch(':lessonId')
    update(@Request() req: any, @Param('lessonId') lessonId: number, @Body() dto: UserLessonUpdateDto) {
        return this.service.update(req.user.id, lessonId, dto);
    }
}
