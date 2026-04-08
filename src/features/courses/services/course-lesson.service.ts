import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseLessonsEntity } from '../entities/course-lessons.entity';
import { CourseLessonCreateDto } from '../dto/course-lesson/course-lesson-create.dto';
import { CourseLessonUpdateDto } from '../dto/course-lesson/course-lesson-update.dto';

@Injectable()
export class CourseLessonService {
    constructor(
        @InjectRepository(CourseLessonsEntity)
        private readonly repo: Repository<CourseLessonsEntity>,
    ) {}

    async create(payload: CourseLessonCreateDto) {
        return this.repo.save(this.repo.create({ ...payload, date: new Date() }));
    }
    async getAll(courseId?: number) {
        return this.repo.find({ where: courseId ? { courseId } : {}, order: { order: 'ASC' } });
    }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Lesson not found');
        return item;
    }
    async update(id: number, payload: CourseLessonUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
