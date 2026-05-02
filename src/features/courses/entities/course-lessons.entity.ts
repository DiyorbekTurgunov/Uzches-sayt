import { Column, Entity, ManyToOne} from 'typeorm';
import type { Relation } from "typeorm";
import { BaseModel } from '../../../core/Base-module';
import type { CourseEntity } from './course.entity';
import type { CourseSectionsEntity } from './course-sections.entity';

@Entity('courseLessons')
export class CourseLessonsEntity extends BaseModel {

    @ManyToOne('CourseEntity', { onDelete: 'CASCADE' })
    course: Relation<CourseEntity>;

    @Column()
    courseId: number;

    @ManyToOne('CourseSectionsEntity', { onDelete: 'CASCADE' })
    courseSection: Relation<CourseSectionsEntity>;

    @Column()
    courseSectionId: number;

    @Column({ type: 'varchar', length: 128 })
    title: string;

    @Column({ type: 'text', nullable: true })
    content: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    thumbnail: string;

    @Column({ type: 'varchar', length: 256 })
    video: string;

    @Column({ nullable: true })
    order: number;

    @Column({ type: 'timestamp' })
    date: Date;

    @Column({ type: 'boolean', default: false })
    isFree: boolean;
}
