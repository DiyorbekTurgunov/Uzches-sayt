import { Column, Entity, ManyToOne} from "typeorm";
import { BaseModule } from "../../../core/Base-module";
import { UserEntity } from "./user.entity";
import { CourseLessonsEntity } from "../../courses/entities/course-lessons.entity";

@Entity()
export class UserLessonEntity extends BaseModule {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => CourseLessonsEntity)
    courseLesson: CourseLessonsEntity;

    @Column()
    courseLessonId: number;

    @Column({ nullable: true })
    stoppedAt: number;

    @Column({ type: 'boolean', default: false })
    isCompleted: boolean;

}