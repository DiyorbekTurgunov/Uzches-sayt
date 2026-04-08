import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from '../services/country.service';
import { CountryCreateDto } from '../dtos/country/country-create.dto';
import { CountryUpdateDto } from '../dtos/country/country-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('countries')
@Controller('countries')
export class CountryController {
    constructor(private readonly service: CountryService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: CountryCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: CountryUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
