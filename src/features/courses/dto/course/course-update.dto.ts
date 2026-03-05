import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Type} from "class-transformer";

export class CourseUpdateDto {

    @ApiProperty()
    @IsOptional()
    authorId: number;

    @ApiProperty()
    @IsOptional()
    languageId: number;

    @ApiProperty()
    @IsOptional()
    difficultyLevelId: number;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    @IsOptional()
    title: string;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    @IsOptional()
    image: string;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @Type(() => Number)
    @IsOptional()
    price: number;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsOptional()
    @Type(() => Number)
    newPrice: number;

    @ApiProperty()
    @Type(() => Number)
    @IsInt()
    @IsOptional()
    reviewsCount: number;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 1 })
    @Type(() => Number)
    @IsOptional()
    @IsOptional()
    rating: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    @IsOptional()
    SectionsCount: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    @IsOptional()
    LessonsCount: number;
}