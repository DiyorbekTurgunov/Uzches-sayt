import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CourseUpdateDto {
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

    @ApiProperty({ required: false, description: 'Image filename from /upload/image' })
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

    @ApiProperty({ required: false, description: 'Publish or unpublish the course' })
    @IsBoolean()
    @IsOptional()
    isPublished: boolean;
}
