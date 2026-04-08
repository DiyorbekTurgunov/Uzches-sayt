import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CourseLessonCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    courseId: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    courseSectionId: number;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    content: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    thumbnail: string;

    @ApiProperty()
    @IsString()
    @MaxLength(256)
    video: string;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    order: number;

    @ApiProperty({ required: false })
    @IsBoolean()
    @IsOptional()
    isFree: boolean;
}
