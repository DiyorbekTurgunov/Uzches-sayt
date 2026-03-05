import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";

export class BookCreateDto {

    @ApiProperty()
    @Type(() => Number)
    authorId: number;

    @ApiProperty()
    @Type(() => Number)
    categoryId: number;

    @ApiProperty()
    @Type(() => Number)
    languageId: number;

    @ApiProperty()
    @Type(() => Number)
    difficultyId: number;

    @ApiProperty()
    @MaxLength(128)
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty()
    @Type(() => Text)
    description: string;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    @IsOptional()
    image: string;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2})
    @Type(() => Number)
    price: number;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2})
    @Type(() => Number)
    @IsOptional()
    newPrice: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 1})
    @Type(() => Number)
    rating: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    reviewCount: number;

    @ApiProperty()
    @Type(() => Number)
    @IsInt()
    pages: number;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    pubDate: Date;
}