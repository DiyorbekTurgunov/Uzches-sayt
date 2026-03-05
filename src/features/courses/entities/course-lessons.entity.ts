import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import { BaseModule } from "../../../core/Base-module";
import {CourseEntity} from "./course.entity";
import {CourseSectionsEntity} from "./course-Sections.entity";

@Entity('courseLessons')
export class CourseLessonsEntity extends BaseModule {

    @ManyToOne(() => CourseEntity)
    course: CourseEntity;

    @Column()
    courseId: number;

    @ManyToOne(() => CourseSectionsEntity)
    courseSection: CourseSectionsEntity;

    @Column()
    courseSectionId: number;

    @Column({ type: 'varchar', length: 128 })
    title: string;

    @Column({ type: 'text', nullable: true })
    content: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    thumbnail: string;

    @Column({ type: 'varchar', length: 256, })
    video: string;

    @Column({ nullable: true })
    order: number

    @Column({ type: 'timestamp'})
    date: Timestamp;

    @Column({ type: 'boolean', default: false })
    isFree: boolean;

}