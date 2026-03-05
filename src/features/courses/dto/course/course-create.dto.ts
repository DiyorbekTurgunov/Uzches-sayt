import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Type} from "class-transformer";

export class CourseCreateDto {

    @ApiProperty()
    authorId: number;

    @ApiProperty()
    languageId: number;

    @ApiProperty()
    difficultyLevelId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @Type(() => Number)
    price: number;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsOptional()
    @Type(() => Number)
    newPrice: number;

    @ApiProperty()
    @Type(() => Number)
    @IsInt()
    reviewsCount: number;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 1 })
    @Type(() => Number)
    @IsOptional()
    rating: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    SectionsCount: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    LessonsCount: number;
}