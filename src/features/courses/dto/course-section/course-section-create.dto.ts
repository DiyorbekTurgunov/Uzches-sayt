import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CourseSectionCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    courseId: number;

    @ApiProperty()
    @IsString()
    @MaxLength(256)
    title: string;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    order: number;
}
