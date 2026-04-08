import { Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookLikeService } from '../services/book-like.service';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';

@ApiTags('book-likes')
@Controller('book-likes')
export class BookLikeController {
    constructor(private readonly service: BookLikeService) {}

    @Post(':bookId')
    @UseGuards(AuthenticationGuard)
    toggle(@Request() req: any, @Param('bookId') bookId: number) {
        return this.service.toggle(req.user.id, bookId);
    }

    @Get(':bookId')
    getByBook(@Param('bookId') bookId: number) {
        return this.service.getByBook(bookId);
    }
}
