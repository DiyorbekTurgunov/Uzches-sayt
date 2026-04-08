import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TermsService } from '../services/terms.service';
import { TermsCreateDto } from '../dtos/terms/terms-create.dto';
import { TermsUpdateDto } from '../dtos/terms/terms-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('terms')
@Controller('terms')
export class TermsController {
    constructor(private readonly service: TermsService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: TermsCreateDto) { return this.service.create(dto); }

    @Get()
    get() { return this.service.get(); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: TermsUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
