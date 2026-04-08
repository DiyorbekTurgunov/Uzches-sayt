import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserLessonListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    userId: number;

    @ApiProperty()
    @Expose()
    courseLessonId: number;

    @ApiProperty()
    @Expose()
    stoppedAt: number;

    @ApiProperty()
    @Expose()
    isCompleted: boolean;
}
