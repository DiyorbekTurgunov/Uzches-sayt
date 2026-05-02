import { Column, Entity, ManyToOne, PrimaryColumn} from 'typeorm';
import type { Relation } from "typeorm";
import type { UserEntity } from '../../authentication/entities/user.entity';
import type { CourseEntity } from './course.entity';

@Entity('purchasedCourses')
export class CoursePurchasedEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne('UserEntity', { onDelete: 'CASCADE' })
    user: Relation<UserEntity>;

    @PrimaryColumn()
    courseId: number;

    @ManyToOne('CourseEntity', { onDelete: 'CASCADE' })
    course: Relation<CourseEntity>;

    @Column({ type: 'boolean', default: false })
    isCompleted: boolean;

    @Column({ type: 'timestamp' })
    date: Date;
}
