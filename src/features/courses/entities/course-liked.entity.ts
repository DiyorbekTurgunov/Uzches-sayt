import { Column, Entity, ManyToOne, PrimaryColumn} from 'typeorm';
import type { Relation } from "typeorm";
import type { UserEntity } from '../../authentication/entities/user.entity';
import type { CourseEntity } from './course.entity';

@Entity('courseLikes')
export class CourseLikedEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne('UserEntity', { onDelete: 'CASCADE' })
    user: Relation<UserEntity>;

    @PrimaryColumn()
    courseId: number;

    @ManyToOne('CourseEntity', { onDelete: 'CASCADE' })
    course: Relation<CourseEntity>;

    @Column({ type: 'timestamp' })
    created: Date;
}
