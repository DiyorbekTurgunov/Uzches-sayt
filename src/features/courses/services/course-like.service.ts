import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseLikedEntity } from '../entities/course-liked.entity';

@Injectable()
export class CourseLikeService {
    constructor(
        @InjectRepository(CourseLikedEntity)
        private readonly repo: Repository<CourseLikedEntity>,
    ) {}

    async toggle(userId: number, courseId: number) {
        const existing = await this.repo.findOneBy({ userId, courseId });
        if (existing) {
            await this.repo.remove(existing);
            return { liked: false };
        }
        await this.repo.save(this.repo.create({ userId, courseId, created: new Date() }));
        return { liked: true };
    }

    async getByCourse(courseId: number) {
        return this.repo.find({ where: { courseId } });
    }
}
