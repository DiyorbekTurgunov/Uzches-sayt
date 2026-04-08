import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoursePurchasedEntity } from '../entities/course-purchased.entity';

@Injectable()
export class CoursePurchasedService {
    constructor(
        @InjectRepository(CoursePurchasedEntity)
        private readonly repo: Repository<CoursePurchasedEntity>,
    ) {}

    async purchase(userId: number, courseId: number) {
        const existing = await this.repo.findOneBy({ userId, courseId });
        if (existing) return existing;
        return this.repo.save(this.repo.create({ userId, courseId, date: new Date() }));
    }

    async getMyPurchases(userId: number) {
        return this.repo.find({ where: { userId } });
    }

    async markCompleted(userId: number, courseId: number) {
        const item = await this.repo.findOneBy({ userId, courseId });
        if (!item) throw new NotFoundException('Purchase not found');
        item.isCompleted = true;
        return this.repo.save(item);
    }
}
