import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CourseCreateDto {
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

    @ApiProperty({ description: 'Image filename from POST /upload/image' })
    @IsString()
    @MaxLength(128)
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
}
