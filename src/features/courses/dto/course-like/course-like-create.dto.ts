import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CourseLikeCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    courseId: number;
}
