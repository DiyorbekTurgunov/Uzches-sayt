import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksCategoriesEntity } from '../entities/books-Categories.entity';
import { BookCateCreateDto } from '../dtos/book-cate/book-cate-create.dto';
import { BookCateUpdateDto } from '../dtos/book-cate/book-cate-update.dto';

@Injectable()
export class BookCategoryService {
    constructor(
        @InjectRepository(BooksCategoriesEntity)
        private readonly repo: Repository<BooksCategoriesEntity>,
    ) {}

    async create(payload: BookCateCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async getAll() { return this.repo.find(); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Book category not found');
        return item;
    }
    async update(id: number, payload: BookCateUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
