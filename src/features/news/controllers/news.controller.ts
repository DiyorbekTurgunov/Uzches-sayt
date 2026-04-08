import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NewsService } from '../services/news.service';
import { NewsCreateDto } from '../dto/news/news-create.dto';
import { NewsUpdateDto } from '../dto/news/news-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('news')
@Controller('news')
export class NewsController {
    constructor(private readonly service: NewsService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    async create(@Body() payload: NewsCreateDto) {
        return this.service.create(payload);
    }

    @Get()
    async getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        return this.service.getOne(id);
    }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    async update(@Param('id') id: number, @Body() payload: NewsUpdateDto) {
        return this.service.update(id, payload);
    }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
