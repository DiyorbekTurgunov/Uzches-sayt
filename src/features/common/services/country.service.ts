import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryEntity } from '../entites/country.entity';
import { CountryCreateDto } from '../dtos/country/country-create.dto';
import { CountryUpdateDto } from '../dtos/country/country-update.dto';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(CountryEntity)
        private readonly repo: Repository<CountryEntity>,
    ) {}

    async create(payload: CountryCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async getAll() { return this.repo.find(); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Country not found');
        return item;
    }
    async update(id: number, payload: CountryUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
