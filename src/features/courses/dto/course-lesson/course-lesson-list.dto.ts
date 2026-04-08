import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CourseLessonListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    courseId: number;

    @ApiProperty()
    @Expose()
    courseSectionId: number;

    @ApiProperty()
    @Expose()
    title: string;

    @ApiProperty()
    @Expose()
    content: string;

    @ApiProperty()
    @Expose()
    thumbnail: string;

    @ApiProperty()
    @Expose()
    video: string;

    @ApiProperty()
    @Expose()
    order: number;

    @ApiProperty()
    @Expose()
    isFree: boolean;
}
