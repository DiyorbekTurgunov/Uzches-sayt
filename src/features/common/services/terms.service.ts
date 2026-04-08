import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TermsEntity } from '../entites/terms.entity';
import { TermsCreateDto } from '../dtos/terms/terms-create.dto';
import { TermsUpdateDto } from '../dtos/terms/terms-update.dto';

@Injectable()
export class TermsService {
    constructor(
        @InjectRepository(TermsEntity)
        private readonly repo: Repository<TermsEntity>,
    ) {}

    async create(payload: TermsCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async get() { return this.repo.findOne({ where: {}, order: { id: 'DESC' } }); }
    async update(id: number, payload: TermsUpdateDto) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Terms not found');
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Terms not found');
        return this.repo.remove(item);
    }
}
