import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MatchService } from '../services/match.service';
import { MatchCreateDto } from '../dto/match/match-create.dto';
import { MatchUpdateDto } from '../dto/match/match-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('matches')
@Controller('matches')
export class MatchController {
    constructor(private readonly service: MatchService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: MatchCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: MatchUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
