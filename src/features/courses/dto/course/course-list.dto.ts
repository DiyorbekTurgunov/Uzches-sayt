import {Expose} from "class-transformer";
import {BaseModel} from "../../../../core/Base-module";

export class CourseListDto extends BaseModel{

    @Expose()
    authorId: number;

    @Expose()
    languageId: number;

    @Expose()
    difficultyLevelId: number;

    @Expose()
    title: string;

    @Expose()
    image: string;

    @Expose()
    price: number;

    @Expose()
    newPrice: number;

    @Expose()
    reviewsCount: number;

    @Expose()
    rating: number;

    @Expose()
    SectionsCount: number;

    @Expose()
    LessonsCount: number;
}