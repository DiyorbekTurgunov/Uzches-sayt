import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from '../../authentication/entities/user.entity';
import { CourseEntity } from './course.entity';

@Entity('purchasedCourses')
export class CoursePurchasedEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
    user: UserEntity;

    @PrimaryColumn()
    courseId: number;

    @ManyToOne(() => CourseEntity, { onDelete: 'CASCADE' })
    course: CourseEntity;

    @Column({ type: 'boolean', default: false })
    isCompleted: boolean;

    @Column({ type: 'timestamp' })
    date: Date;
}
