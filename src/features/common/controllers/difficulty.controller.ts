import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DifficultyService } from '../services/difficulty.service';
import { DifficultyCreateDto } from '../dtos/difficulties/difficulty-create.dto';
import { DifficultyUpdateDto } from '../dtos/difficulties/difficulty-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('difficulties')
@Controller('difficulties')
export class DifficultyController {
    constructor(private readonly service: DifficultyService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: DifficultyCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: DifficultyUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
