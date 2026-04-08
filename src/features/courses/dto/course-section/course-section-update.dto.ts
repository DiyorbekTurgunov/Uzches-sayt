import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CourseSectionUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(256)
    @IsOptional()
    title: string;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    order: number;
}
