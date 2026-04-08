import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/Base-module';
import { Role } from '../../../core/enums/role.enum';
import { LoginType } from '../../../core/enums/login-type.enum';
import { OtpCodeEntity } from './otp-codes.entity';
import { BooksReviewsEntity } from '../../library/entities/books-Reviews.entity';
import { BooksLikedEntity } from '../../library/entities/books-liked.entity';
import { CourseReviewsEntity } from '../../courses/entities/course-reviews.entity';
import { CourseLikedEntity } from '../../courses/entities/course-liked.entity';
import { UserLessonEntity } from '../../courses/entities/user-lessons.entity';

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

    @OneToMany(() => OtpCodeEntity, (otp) => otp.user)
    otpCodes: OtpCodeEntity[];

    @OneToMany(() => BooksReviewsEntity, (r) => r.user)
    bookReviews: BooksReviewsEntity[];

    @OneToMany(() => BooksLikedEntity, (l) => l.user)
    bookLikes: BooksLikedEntity[];

    @OneToMany(() => CourseReviewsEntity, (r) => r.user)
    courseReviews: CourseReviewsEntity[];

    @OneToMany(() => CourseLikedEntity, (l) => l.user)
    courseLikes: CourseLikedEntity[];

    @OneToMany(() => UserLessonEntity, (ul) => ul.user)
    lessons: UserLessonEntity[];
}
