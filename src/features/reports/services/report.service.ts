import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportEntity } from '../entities/report.entity';
import { ReportCreateDto } from '../dto/report/report-create.dto';

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(ReportEntity)
        private readonly repo: Repository<ReportEntity>,
    ) {}

    async create(userId: number, payload: ReportCreateDto) {
        return this.repo.save(this.repo.create({ ...payload, userId }));
    }
    async getAll() { return this.repo.find({ order: { createdAt: 'DESC' } }); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Report not found');
        return item;
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
