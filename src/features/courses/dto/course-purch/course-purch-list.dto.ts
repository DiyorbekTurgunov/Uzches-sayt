import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CoursePurchListDto {
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
    isCompleted: boolean;

    @ApiProperty()
    @Expose()
    createdAt: Date;
}
