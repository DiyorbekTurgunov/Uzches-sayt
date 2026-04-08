import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LanguageService } from '../services/language.service';
import { LanguageCreateDto } from '../dtos/languages/language-create.dto';
import { LanguageUpdateDto } from '../dtos/languages/language-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('languages')
@Controller('languages')
export class LanguageController {
    constructor(private readonly service: LanguageService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: LanguageCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: LanguageUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
