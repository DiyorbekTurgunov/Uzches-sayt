import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksLikedEntity } from '../entities/books-liked.entity';

@Injectable()
export class BookLikeService {
    constructor(
        @InjectRepository(BooksLikedEntity)
        private readonly repo: Repository<BooksLikedEntity>,
    ) {}

    async toggle(userId: number, bookId: number) {
        const existing = await this.repo.findOneBy({ userId, bookId });
        if (existing) {
            await this.repo.remove(existing);
            return { liked: false };
        }
        await this.repo.save(this.repo.create({ userId, bookId, created: new Date() }));
        return { liked: true };
    }

    async getByBook(bookId: number) {
        return this.repo.find({ where: { bookId } });
    }
}
