import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CourseLessonUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
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

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(256)
    @IsOptional()
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
