import { Column, Entity, ManyToOne} from 'typeorm';
import type { Relation } from "typeorm";
import { BaseModel } from '../../../core/Base-module';
import type { UserEntity } from '../../authentication/entities/user.entity';
import type { CourseEntity } from './course.entity';

@Entity('courseReviews')
export class CourseReviewsEntity extends BaseModel {

    @ManyToOne('UserEntity', { onDelete: 'CASCADE' })
    user: Relation<UserEntity>;

    @Column()
    userId: number;

    @ManyToOne('CourseEntity', { onDelete: 'CASCADE' })
    course: Relation<CourseEntity>;

    @Column()
    courseId: number;

    @Column({ type: 'int' })
    rating: number;

    @Column({ type: 'varchar', length: 512, nullable: true })
    comment: string;
}
