import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseModel} from "../../../core/Base-module";
import {ReportCategoriesEntity} from "./report-Categories.entity";
import {ReportType} from "../../../core/enums/report-type.enum";
import {CourseReviewsEntity} from "../../courses/entities/course-Reviews.entity";
import {BooksReviewsEntity} from "../../library/books/entities/books-Reviews.entity";

@Entity('reports')
export class ReportEntity extends BaseModel {

    @ManyToOne(() => ReportCategoriesEntity)
    reportCategory: ReportCategoriesEntity;

    @Column()
    reportCategoryId: number;

    @Column({ type: 'enum', enum: ReportType})
    target: ReportType;

    @ManyToOne(() => CourseReviewsEntity)
    courseReviews: CourseReviewsEntity;

    @ManyToOne(() => BooksReviewsEntity)
    bookReviews: BooksReviewsEntity;

    @Column()
    targetId: number;

    @Column({ type: 'varchar', length: 256, nullable: true })
    description: string;

    @Column({ type: 'timestamp'})
    date: Timestamp;

}