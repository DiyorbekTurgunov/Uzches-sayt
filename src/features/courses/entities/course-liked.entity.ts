import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseModel} from "../../../core/Base-module";
import {UserEntity} from "../../users/entities/user.entity";
import {CourseEntity} from "./course.entity";

@Entity('coursesLiked')
export class CourseLikedEntity extends BaseModel {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => CourseEntity)
    course: CourseEntity;

    @Column()
    courseId: number;

    @Column({ type: 'timestamp' })
    date: Timestamp;
}