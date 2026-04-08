import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class BookCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    authorId: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)    
    categoryId: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    languageId: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    difficultyId: number;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    image: string;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @Type(() => Number)
    price: number;

    @ApiProperty({ required: false })
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    newPrice: number;

    @ApiProperty()
    @IsInt()
    @Min(1)
    @Type(() => Number)
    pages: number;

    @ApiProperty()
    @IsDateString()
    pubDate: string;
}
