import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseCategoriesEntity } from '../entities/course-categories.entity';
import { CourseCateCreateDto } from '../dto/course-cate/course-cate-create.dto';
import { CourseCateUpdateDto } from '../dto/course-cate/course-cate-update.dto';

@Injectable()
export class CourseCategoryService {
    constructor(
        @InjectRepository(CourseCategoriesEntity)
        private readonly repo: Repository<CourseCategoriesEntity>,
    ) {}

    async create(payload: CourseCateCreateDto) { return this.repo.save(this.repo.create(payload)); }
    async getAll() { return this.repo.find(); }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Course category not found');
        return item;
    }
    async update(id: number, payload: CourseCateUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
