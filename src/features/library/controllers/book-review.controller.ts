import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookReviewService } from '../services/book-review.service';
import { BookReviewCreateDto } from '../dtos/book-review/book-review-create.dto';
import { BookReviewUpdateDto } from '../dtos/book-review/book-review-update.dto';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('book-reviews')
@Controller('book-reviews')
export class BookReviewController {
    constructor(private readonly service: BookReviewService) {}

    @Post()
    @UseGuards(AuthenticationGuard)
    create(@Request() req: any, @Body() dto: BookReviewCreateDto) {
        return this.service.create(req.user.id, dto);
    }

    @Get()
    getAll(@Query('bookId') bookId?: number) {
        return this.service.getAll(bookId);
    }

    @Get(':id')
    getOne(@Param('id') id: number) { return this.service.getOne(id); }

    @Patch(':id')
    @UseGuards(AuthenticationGuard)
    update(@Param('id') id: number, @Request() req: any, @Body() dto: BookReviewUpdateDto) {
        return this.service.update(id, req.user.id, dto);
    }

    @Delete(':id')
    @UseGuards(AuthenticationGuard)
    delete(@Param('id') id: number) { return this.service.delete(id); }
}
