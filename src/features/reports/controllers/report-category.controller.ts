import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReportCategoryService } from '../services/report-category.service';
import { ReportCateCreateDto } from '../dto/report-cate/report-cate-create.dto';
import { ReportCateUpdateDto } from '../dto/report-cate/report-cate-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('report-categories')
@Controller('report-categories')
export class ReportCategoryController {
    constructor(private readonly service: ReportCategoryService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: ReportCateCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: ReportCateUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
