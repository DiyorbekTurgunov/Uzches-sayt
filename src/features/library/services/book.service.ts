import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { BooksEntity } from '../entities/books.entity';
import { BookCreateDto } from '../dtos/book/book-create.dto';
import { BookUpdateDto } from '../dtos/book/book-update.dto';
import { BookListDto } from '../dtos/book/book-list.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BooksEntity)
        private readonly repo: Repository<BooksEntity>,
    ) {}

    async create(payload: BookCreateDto) {
        const item = this.repo.create(payload);
        await this.repo.save(item);
        return plainToInstance(BookListDto, item, { excludeExtraneousValues: true });
    }
    async getAll() {
        return plainToInstance(BookListDto, await this.repo.find(), { excludeExtraneousValues: true });
    }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Book not found');
        return plainToInstance(BookListDto, item, { excludeExtraneousValues: true });
    }
    async update(id: number, payload: BookUpdateDto) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Book not found');
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Book not found');
        return this.repo.remove(item);
    }
}
