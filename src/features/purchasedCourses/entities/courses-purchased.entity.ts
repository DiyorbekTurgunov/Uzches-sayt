import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {UserEntity} from "../../users/entities/user.entity";
import {CoursesEntity} from "../../courses/entities/courses.entity";

@Entity()
export class coursesPurchasedEntity extends BaseEntity {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => CoursesEntity)
    course: CoursesEntity;

    @Column()
    courseId: number;

    @Column({ type: 'boolean', default: false })
    isCompleted: boolean;

    @Column({ type: 'timestamp' })
    date: Timestamp;
}