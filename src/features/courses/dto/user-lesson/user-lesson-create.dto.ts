import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class UserLessonCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    courseLessonId: number;
}
