import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DifficultyEntity } from '../entites/difficulty.entity';
import { DifficultyCreateDto } from '../dtos/difficulties/difficulty-create.dto';
import { DifficultyUpdateDto } from '../dtos/difficulties/difficulty-update.dto';

@Injectable()
export class DifficultyService {
    constructor(
        @InjectRepository(DifficultyEntity)
        private readonly repo: Repository<DifficultyEntity>,
    ) {}

    async create(payload: DifficultyCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async getAll() { return this.repo.find(); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Difficulty not found');
        return item;
    }
    async update(id: number, payload: DifficultyUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
