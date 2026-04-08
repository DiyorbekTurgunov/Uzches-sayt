import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from '../services/author.service';
import { AuthorCreateDto } from '../dtos/authors/author-create.dto';
import { AuthorUpdateDto } from '../dtos/authors/author-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('authors')
@Controller('authors')
export class AuthorController {
    constructor(private readonly service: AuthorService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: AuthorCreateDto) {
        return this.service.create(dto);
    }

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.service.getOne(id);
    }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: AuthorUpdateDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
