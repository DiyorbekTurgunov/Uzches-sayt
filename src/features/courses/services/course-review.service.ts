import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseReviewsEntity } from '../entities/course-reviews.entity';
import { CourseReviewCreateDto } from '../dto/course-review/course-review-create.dto';
import { CourseReviewUpdateDto } from '../dto/course-review/course-review-update.dto';

@Injectable()
export class CourseReviewService {
    constructor(
        @InjectRepository(CourseReviewsEntity)
        private readonly repo: Repository<CourseReviewsEntity>,
    ) {}

    async create(userId: number, payload: CourseReviewCreateDto) {
        return this.repo.save(this.repo.create({ ...payload, userId }));
    }
    async getAll(courseId?: number) {
        return this.repo.find({ where: courseId ? { courseId } : {}, order: { createdAt: 'DESC' } });
    }
    async getOne(id: number) {
        const item = await this.repo.findOneBy({ id });
        if (!item) throw new NotFoundException('Review not found');
        return item;
    }
    async update(id: number, payload: CourseReviewUpdateDto) {
        const item = await this.getOne(id);
        Object.assign(item, payload);
        return this.repo.save(item);
    }
    async delete(id: number) {
        const item = await this.getOne(id);
        return this.repo.remove(item);
    }
}
