import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from '../../authentication/entities/user.entity';
import { CourseLessonsEntity } from './course-lessons.entity';

@Entity('users_lessons')
export class UserLessonEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
    user: UserEntity;

    @PrimaryColumn()
    courseLessonId: number;

    @ManyToOne(() => CourseLessonsEntity, { onDelete: 'CASCADE' })
    courseLesson: CourseLessonsEntity;

    @Column({ nullable: true })
    stoppedAt: number;

    @Column({ type: 'boolean', default: false })
    isCompleted: boolean;
}
