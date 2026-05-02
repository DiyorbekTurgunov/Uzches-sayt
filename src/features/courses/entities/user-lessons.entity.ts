import { Column, Entity, ManyToOne, PrimaryColumn} from 'typeorm';
import type { Relation } from "typeorm";
import type { UserEntity } from '../../authentication/entities/user.entity';
import type { CourseLessonsEntity } from './course-lessons.entity';

@Entity('users_lessons')
export class UserLessonEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne('UserEntity', { onDelete: 'CASCADE' })
    user: Relation<UserEntity>;

    @PrimaryColumn()
    courseLessonId: number;

    @ManyToOne('CourseLessonsEntity', { onDelete: 'CASCADE' })
    courseLesson: Relation<CourseLessonsEntity>;

    @Column({ nullable: true })
    stoppedAt: number;

    @Column({ type: 'boolean', default: false })
    isCompleted: boolean;
}
