import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportCategoryEntity } from '../entities/report-category.entity';
import { ReportCateCreateDto } from '../dto/report-cate/report-cate-create.dto';
import { ReportCateUpdateDto } from '../dto/report-cate/report-cate-update.dto';

@Injectable()
export class ReportCategoryService {
    constructor(
        @InjectRepository(ReportCategoryEntity)
        private readonly repo: Repository<ReportCategoryEntity>,
    ) {}

    async create(payload: ReportCateCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async getAll() { return this.repo.find({ order: { order: 'ASC' } }); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Category not found');
        return item;
    }
    async update(id: number, payload: ReportCateUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
