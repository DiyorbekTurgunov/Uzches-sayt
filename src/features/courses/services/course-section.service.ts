import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseSectionsEntity } from '../entities/course-sections.entity';
import { CourseSectionCreateDto } from '../dto/course-section/course-section-create.dto';
import { CourseSectionUpdateDto } from '../dto/course-section/course-section-update.dto';

@Injectable()
export class CourseSectionService {
    constructor(
        @InjectRepository(CourseSectionsEntity)
        private readonly repo: Repository<CourseSectionsEntity>,
    ) {}

    async create(payload: CourseSectionCreateDto) {
        return this.repo.save(this.repo.create({ ...payload, date: new Date() }));
    }
    async getAll(courseId?: number) {
        return this.repo.find({ where: courseId ? { courseId } : {}, order: { order: 'ASC' } });
    }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Section not found');
        return item;
    }
    async update(id: number, payload: CourseSectionUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
