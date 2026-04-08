import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CourseReviewUpdateDto {
    @ApiProperty({ required: false, minimum: 1, maximum: 5 })
    @IsInt()
    @Min(1)
    @Max(5)
    @IsOptional()
    @Type(() => Number)
    rating: number;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(512)
    @IsOptional()
    comment: string;
}
