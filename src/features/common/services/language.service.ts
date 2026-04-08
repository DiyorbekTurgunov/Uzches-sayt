import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguagesEntity } from '../entites/laguages.entity';
import { LanguageCreateDto } from '../dtos/languages/language-create.dto';
import { LanguageUpdateDto } from '../dtos/languages/language-update.dto';

@Injectable()
export class LanguageService {
    constructor(
        @InjectRepository(LanguagesEntity)
        private readonly repo: Repository<LanguagesEntity>,
    ) {}

    async create(payload: LanguageCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async getAll() { return this.repo.find(); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Language not found');
        return item;
    }
    async update(id: number, payload: LanguageUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
