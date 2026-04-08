import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class BookUpdateDto {
    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    authorId: number;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    categoryId: number;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    languageId: number;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    difficultyId: number;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    image: string;

    @ApiProperty({ required: false })
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    price: number;

    @ApiProperty({ required: false })
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    newPrice: number;

    @ApiProperty({ required: false })
    @IsInt()
    @Min(1)
    @IsOptional()
    @Type(() => Number)
    pages: number;

    @ApiProperty({ required: false })
    @IsDateString()
    @IsOptional()
    pubDate: string;
}
