import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {UserEntity} from "../../users/entities/user.entity";
import {CourseEntity} from "./course.entity";
import {BaseModel} from "../../../core/Base-module";

@Entity('courseReviews')
export class CourseReviewsEntity extends BaseModel {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => CourseEntity)
    course: CourseEntity;

    @Column()
    courseId: number;

    @Column()
    rating: number;

    @Column({ type: 'varchar', length: 512, nullable: true })
    comment: string;

    @Column({ type: 'timestamp' })
    date: Timestamp;
}