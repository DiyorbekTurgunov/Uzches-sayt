import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../entites/authors.entity';
import { AuthorCreateDto } from '../dtos/authors/author-create.dto';
import { AuthorUpdateDto } from '../dtos/authors/author-update.dto';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(AuthorEntity)
        private readonly repo: Repository<AuthorEntity>,
    ) {}

    async create(payload: AuthorCreateDto) {
        return this.repo.save(this.repo.create(payload));
    }

    async getAll() {
        return this.repo.find();
    }

    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Author not found');
        return item;
    }

    async update(id: number, payload: AuthorUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }

    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
