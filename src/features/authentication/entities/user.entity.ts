import { Column, Entity, OneToMany} from 'typeorm';
import type { Relation } from "typeorm";
import { BaseModel } from '../../../core/Base-module';
import { Role } from '../../../core/enums/role.enum';
import { LoginType } from '../../../core/enums/login-type.enum';
import type { OtpCodeEntity } from './otp-codes.entity';
import type { BooksReviewsEntity } from '../../library/entities/books-Reviews.entity';
import type { BooksLikedEntity } from '../../library/entities/books-liked.entity';
import type { CourseReviewsEntity } from '../../courses/entities/course-reviews.entity';
import type { CourseLikedEntity } from '../../courses/entities/course-liked.entity';
import type { UserLessonEntity } from '../../courses/entities/user-lessons.entity';

@Entity('users')
export class UserEntity extends BaseModel {

    @Column({ type: 'enum', enum: Role, default: Role.User })
    role: Role;

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    profileImage: string;

    @Column({ type: 'varchar', length: 64, unique: true })
    login: string;

    @Column({ type: 'enum', enum: LoginType })
    loginType: LoginType;

    @Column({ type: 'varchar', length: 128, nullable: true })
    password: string;

    @Column({ type: 'date', nullable: true })
    birthDate: Date;

    @Column({ type: 'boolean', default: false })
    isVerified: boolean;

    @Column({ type: 'boolean', default: false })
    isActive: boolean;

    @OneToMany('OtpCodeEntity', 'user')
    otpCodes: Relation<OtpCodeEntity[]>;

    @OneToMany('BooksReviewsEntity', 'user')
    bookReviews: Relation<BooksReviewsEntity[]>;

    @OneToMany('BooksLikedEntity', 'user')
    bookLikes: Relation<BooksLikedEntity[]>;

    @OneToMany('CourseReviewsEntity', 'user')
    courseReviews: Relation<CourseReviewsEntity[]>;

    @OneToMany('CourseLikedEntity', 'user')
    courseLikes: Relation<CourseLikedEntity[]>;

    @OneToMany('UserLessonEntity', 'user')
    lessons: Relation<UserLessonEntity[]>;
}
