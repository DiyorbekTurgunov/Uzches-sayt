import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {UserEntity} from "../../users/entities/user.entity";
import {CoursesEntity} from "../../courses/entities/courses.entity";
import {BaseEntity} from "../../../core/Base-module";

@Entity('courseReviews')
export class CourseReviewsEntity extends BaseEntity {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => CoursesEntity)
    course: CoursesEntity;

    @Column()
    courseId: number;

    @Column()
    rating: number;

    @Column({ type: 'varchar', length: 512 })
    comment: string;

    @Column({ type: 'timestamp' })
    date: Timestamp;
}