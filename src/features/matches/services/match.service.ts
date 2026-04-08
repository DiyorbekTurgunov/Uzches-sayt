import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatchesEntity } from '../entities/matches.entity';
import { MatchCreateDto } from '../dto/match/match-create.dto';
import { MatchUpdateDto } from '../dto/match/match-update.dto';

@Injectable()
export class MatchService {
    constructor(
        @InjectRepository(MatchesEntity)
        private readonly repo: Repository<MatchesEntity>,
    ) {}

    async create(payload: MatchCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async getAll() { return this.repo.find({ order: { createdAt: 'DESC' } }); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Match not found');
        return item;
    }
    async update(id: number, payload: MatchUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
