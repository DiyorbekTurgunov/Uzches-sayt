import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../services/book.service';
import { BookCreateDto } from '../dtos/book/book-create.dto';
import { BookUpdateDto } from '../dtos/book/book-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('books')
@Controller('books')
export class BookController {
    constructor(private readonly service: BookService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Body() dto: BookCreateDto) { return this.service.create(dto); }

    @Get()
    getAll() { return this.service.getAll(); }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Body() dto: BookUpdateDto) { return this.service.update(id, dto); }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
