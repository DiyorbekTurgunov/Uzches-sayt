import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsDate, IsInt, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";

export class BookUpdateDto {

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    authorId: number;

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    categoryId: number;

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    languageId: number;

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    difficultyId: number;

    @ApiProperty()
    @MaxLength(128)
    @IsString()
    @IsOptional()
    title: string;

    @ApiProperty()
    @Type(() => Text)
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    @IsOptional()
    Image: string;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2})
    @Type(() => Number)
    @IsOptional()
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
    @IsOptional()
    reviewCount: number;

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    pages: number;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    @IsOptional()
    pubDate: Date;
}