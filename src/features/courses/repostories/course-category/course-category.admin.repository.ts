import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategoriesEntity } from '../../entities/course-categories.entity';
import { CourseCateCreateDto } from '../../dto/course-cate/course-cate-create.dto';
import { CourseCateUpdateDto } from '../../dto/course-cate/course-cate-update.dto';

@Injectable()
export class CourseCategoryAdminRepository {

    async create(payload: CourseCateCreateDto) {
        // @ts-ignore
        return CourseCategoriesEntity.save(CourseCategoriesEntity.create(payload));
    }

    async getAll() {
        return CourseCategoriesEntity.find();
    }

    async getOneById(id: number) {
        const item = await CourseCategoriesEntity.findOneBy({ id });
        if (!item) throw new NotFoundException('Course category not found');
        return item;
    }

    async update(id: number, payload: CourseCateUpdateDto) {
        const item = await this.getOneById(id);
        Object.assign(item, payload);
        return CourseCategoriesEntity.save(item);
    }

    async delete(id: number) {
        const item = await this.getOneById(id);
        return CourseCategoriesEntity.remove(item);
    }
}
