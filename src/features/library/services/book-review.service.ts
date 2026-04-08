import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksReviewsEntity } from '../entities/books-Reviews.entity';
import { BookReviewCreateDto } from '../dtos/book-review/book-review-create.dto';
import { BookReviewUpdateDto } from '../dtos/book-review/book-review-update.dto';

@Injectable()
export class BookReviewService {
    constructor(
        @InjectRepository(BooksReviewsEntity)
        private readonly repo: Repository<BooksReviewsEntity>,
    ) {}

    async create(userId: number, payload: BookReviewCreateDto) {
        return this.repo.save(this.repo.create({ ...payload, userId }));
    }
    async getAll(bookId?: number) {
        return this.repo.find({
            where: bookId ? { bookId } : {},
            order: { createdAt: 'DESC' },
        });
    }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Review not found');
        return item;
    }
    async update(id: number, userId: number, payload: BookReviewUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
