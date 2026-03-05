import { Column, Entity, OneToMany, Relation } from "typeorm";
import { LoginType } from "../../../core/enums/login-type.enum";
import { OtpCodeEntity } from "../../otpCodes/entities/otp-Codes.entity";
import { BooksReviewsEntity } from "../../library/books/entities/books-Reviews.entity";
import { BooksLikedEntity } from "../../library/books/entities/books-liked.entity";
import { CourseReviewsEntity } from "../../courses/entities/course-Reviews.entity";
import { CourseLikedEntity } from "../../courses/entities/course-liked.entity";
import { UserLessonEntity } from "./user-lessons.entity";
import { BaseModel } from "../../../core/Base-module";
import { Role } from "../../../core/enums/role.enum";

@Entity('users')
export class UserEntity extends BaseModel {

    @Column({ type: 'enum', enum: Role, default: Role.User })
    role!: Role;

    @Column({ length: 64 })
    fullName!: string;

    @Column({ length: 128, nullable: true })
    profileImage?: string;

    @Column({ length: 64, unique: true })
    login!: string;

    @Column({ type: 'enum', enum: LoginType })
    loginType!: LoginType;

    @Column({ length: 128, nullable: true })
    password?: string;

    @Column({ type: 'date', nullable: true })
    birthDate?: Date;

    @Column({ type: 'boolean', default: false })
    isVerified!: boolean;

    @Column({ type: 'boolean', default: false })
    isActive!: boolean;

    @OneToMany(() => OtpCodeEntity, (otpCodeEntity) => otpCodeEntity.user)
    otpCodes?: Relation<OtpCodeEntity[]>;

    @OneToMany(() => BooksReviewsEntity, (booksReviewsEntity) => booksReviewsEntity.user)
    bookReviews?: Relation<BooksReviewsEntity[]>;

    @OneToMany(() => BooksLikedEntity, (booksLikedEntity) => booksLikedEntity.user)
    bookLikes?: Relation<BooksLikedEntity[]>;

    @OneToMany(() => CourseReviewsEntity, (courseReviewsEntity) => courseReviewsEntity.user)
    courseReviews?: Relation<CourseReviewsEntity[]>;

    @OneToMany(() => CourseLikedEntity, (courseLikedEntity) => courseLikedEntity.user)
    courseLikes?: Relation<CourseLikedEntity[]>;

    @OneToMany(() => UserLessonEntity, (lesson) => lesson.user)
    lessons?: Relation<UserLessonEntity[]>;
}