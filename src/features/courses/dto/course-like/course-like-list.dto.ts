import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CourseLikeListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    userId: number;

    @ApiProperty()
    @Expose()
    courseId: number;

    @ApiProperty()
    @Expose()
    createdAt: Date;
}
