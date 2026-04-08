import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { CourseEntity } from '../entities/course.entity';
import { CourseCreateDto } from '../dto/course/course-create.dto';
import { CourseUpdateDto } from '../dto/course/course-update.dto';
import { CourseListDto } from '../dto/course/course-list.dto';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(CourseEntity)
        private readonly repo: Repository<CourseEntity>,
    ) {}

    async create(payload: CourseCreateDto) {
        const item = this.repo.create(payload);
        await this.repo.save(item);
        return plainToInstance(CourseListDto, item, { excludeExtraneousValues: true });
    }
    async getAll() {
        return plainToInstance(CourseListDto, await this.repo.find(), { excludeExtraneousValues: true });
    }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Course not found');
        return plainToInstance(CourseListDto, item, { excludeExtraneousValues: true });
    }
    async update(id: number, payload: CourseUpdateDto) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Course not found');
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Course not found');
        return this.repo.remove(item);
    }
}
