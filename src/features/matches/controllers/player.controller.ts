import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlayerService } from '../services/player.service';
import { PlayerCreateDto } from '../dto/player/player-create.dto';
import { PlayerUpdateDto } from '../dto/player/player-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('players')
@Controller('players')
export class PlayerController {
    constructor(private readonly service: PlayerService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: PlayerCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: PlayerUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
