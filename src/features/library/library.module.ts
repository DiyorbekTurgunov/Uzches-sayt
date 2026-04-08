import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { BooksEntity } from './entities/books.entity';
import { BooksCategoriesEntity } from './entities/books-Categories.entity';
import { BooksReviewsEntity } from './entities/books-Reviews.entity';
import { BooksLikedEntity } from './entities/books-liked.entity';
import { BookService } from './services/book.service';
import { BookCategoryService } from './services/book-category.service';
import { BookReviewService } from './services/book-review.service';
import { BookLikeService } from './services/book-like.service';
import { BookController } from './controllers/book-controller';
import { BookCategoryController } from './controllers/book-category.controller';
import { BookReviewController } from './controllers/book-review.controller';
import { BookLikeController } from './controllers/book-like.controller';
import { jwtModuleConfig } from '../../configs/jwt-module.config';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            BooksEntity,
            BooksCategoriesEntity,
            BooksReviewsEntity,
            BooksLikedEntity,
        ]),
        JwtModule.register(jwtModuleConfig),
    ],
    controllers: [
        BookController,
        BookCategoryController,
        BookReviewController,
        BookLikeController,
    ],
    providers: [
        BookService,
        BookCategoryService,
        BookReviewService,
        BookLikeService,
    ],
})
export class LibraryModule {}
