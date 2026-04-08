import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserLessonEntity } from '../entities/user-lessons.entity';
import { UserLessonUpdateDto } from '../dto/user-lesson/user-lesson-update.dto';

@Injectable()
export class UserLessonService {
    constructor(
        @InjectRepository(UserLessonEntity)
        private readonly repo: Repository<UserLessonEntity>,
    ) {}

    async start(userId: number, courseLessonId: number) {
        const existing = await this.repo.findOneBy({ userId, courseLessonId });
        if (existing) return existing;
        return this.repo.save(this.repo.create({ userId, courseLessonId }));
    }

    async getMyLessons(userId: number) {
        return this.repo.find({ where: { userId } });
    }

    async update(userId: number, courseLessonId: number, payload: UserLessonUpdateDto) {
        const item = await this.repo.findOneBy({ userId, courseLessonId });
        if (!item) throw new NotFoundException('User lesson not found');
        Object.assign(item, payload);
        return this.repo.save(item);
    }
}
