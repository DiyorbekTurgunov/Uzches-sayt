import {Expose} from "class-transformer";
import {BaseModel} from "../../../../../core/Base-module";

export class BookListDto extends BaseModel{

    @Expose()
    authorId: number;

    @Expose()
    categoryId: number;

    @Expose()
    languageId: number;

    @Expose()
    difficultyId: number;

    @Expose()
    title: string;

    @Expose()
    description: string;

    @Expose()
    Image: string;

    @Expose()
    price: number;

    @Expose()
    newPrice: number;

    @Expose()
    rating: number;

    @Expose()
    reviewCount: number;

    @Expose()
    pages: number;

    @Expose()
    pubDate: number;
}