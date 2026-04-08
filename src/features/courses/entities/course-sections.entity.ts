import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/Base-module';
import { CourseEntity } from './course.entity';

@Entity('courseSections')
export class CourseSectionsEntity extends BaseModel {

    @ManyToOne(() => CourseEntity, { onDelete: 'CASCADE' })
    course: CourseEntity;

    @Column()
    courseId: number;

    @Column({ type: 'varchar', length: 256 })
    title: string;

    @Column({ nullable: true })
    order: number;

    @Column({ type: 'timestamp' })
    date: Date;
}
