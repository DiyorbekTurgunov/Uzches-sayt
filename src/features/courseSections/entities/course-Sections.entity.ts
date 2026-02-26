import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {CoursesEntity} from "../../courses/entities/courses.entity";

@Entity('courseSections')
export class CourseSectionsEntity extends BaseEntity {

    @ManyToOne(() => CoursesEntity)
    course: CoursesEntity;

    @Column()
    courseId: number;

    @Column({ type: 'varchar', length: 256 })
    title: string;

    @Column({ nullable: true })
    order: number;

    @Column()
    date: Timestamp;
}