import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReportService } from '../services/report.service';
import { ReportCreateDto } from '../dto/report/report-create.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('reports')
@Controller('reports')
@UseGuards(AuthenticationGuard)
export class ReportController {
    constructor(private readonly service: ReportService) {}

    @Post()
    create(@Request() req: any, @Body() dto: ReportCreateDto) {
        return this.service.create(req.user.id, dto);
    }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Delete(':id')
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
