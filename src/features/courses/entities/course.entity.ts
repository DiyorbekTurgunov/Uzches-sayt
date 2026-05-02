import { Column, Entity, ManyToOne} from 'typeorm';
import type { Relation } from "typeorm";
import { BaseModel } from '../../../core/Base-module';
import type { AuthorEntity } from '../../common/entites/authors.entity';
import type { LanguagesEntity } from '../../common/entites/laguages.entity';
import type { DifficultyEntity } from '../../common/entites/difficulty.entity';
import type { CourseCategoriesEntity } from './course-categories.entity';

@Entity('courses')
export class CourseEntity extends BaseModel {

    @ManyToOne('AuthorEntity')
    author: Relation<AuthorEntity>;

    @Column()
    authorId: number;

    @ManyToOne('CourseCategoriesEntity')
    category: Relation<CourseCategoriesEntity>;

    @Column()
    categoryId: number;

    @ManyToOne('LanguagesEntity')
    language: Relation<LanguagesEntity>;

    @Column()
    languageId: number;

    @ManyToOne('DifficultyEntity')
    difficulty: Relation<DifficultyEntity>;

    @Column()
    difficultyId: number;

    @Column({ type: 'varchar', length: 128 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    image: string;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    price: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
    newPrice: number;

    @Column({ type: 'boolean', default: false })
    isPublished: boolean;

    @Column({ default: 0 })
    reviewsCount: number;

    @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
    rating: number;

    @Column({ default: 0 })
    sectionsCount: number;

    @Column({ default: 0 })
    lessonsCount: number;
}
