import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { PlayerCreateDto } from '../dto/player/player-create.dto';
import { PlayerUpdateDto } from '../dto/player/player-update.dto';

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(PlayerEntity)
        private readonly repo: Repository<PlayerEntity>,
    ) {}

    async create(payload: PlayerCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async getAll() { return this.repo.find(); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Player not found');
        return item;
    }
    async update(id: number, payload: PlayerUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
