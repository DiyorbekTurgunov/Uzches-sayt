import {Column, Entity, ManyToOne} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {ReportCategoriesEntity} from "../../reportCategories/entities/report-Categories.entity";
import {ReportType} from "../../../core/enums/report-Type.enum";
import {CoursesEntity} from "../../courses/entities/courses.entity";
import {CourseReviewsEntity} from "../../courseReviews/entities/course-Reviews.entity";
import {BookReviewsEntity} from "../../bookReviews/entities/book-Reviews.entity";

function CourseReviewsEntityEntity() {

}

@Entity('reports')
export class ReportsEntity extends BaseEntity {

    @ManyToOne(() => ReportCategoriesEntity)
    reportCategory: ReportCategoriesEntity;

    @Column()
    reportCategoryId: number;

    @Column({ type: 'enum', enum: ReportType})
    target: ReportType;

    @ManyToOne(() => CourseReviewsEntity)
    courseReviews: CourseReviewsEntity;

    @ManyToOne(() => BookReviewsEntity)
    bookReviews: BookReviewsEntity;

    @Column()
    targetId: number;


}