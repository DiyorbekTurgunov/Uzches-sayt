import { Controller, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CoursePurchasedService } from '../services/course-purchased.service';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('course-purchased')
@Controller('course-purchased')
@UseGuards(AuthenticationGuard)
export class CoursePurchasedController {
    constructor(private readonly service: CoursePurchasedService) {}

    @Post(':courseId')
    purchase(@Request() req: any, @Param('courseId') courseId: number) {
        return this.service.purchase(req.user.id, courseId);
    }

    @Get('my')
    getMyPurchases(@Request() req: any) {
        return this.service.getMyPurchases(req.user.id);
    }

    @Patch(':courseId/complete')
    markCompleted(@Request() req: any, @Param('courseId') courseId: number) {
        return this.service.markCompleted(req.user.id, courseId);
    }
}
