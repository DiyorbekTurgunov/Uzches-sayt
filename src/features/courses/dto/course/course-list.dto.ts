import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CourseListDto {
    @ApiProperty() @Expose() id: number;
    @ApiProperty() @Expose() authorId: number;
    @ApiProperty() @Expose() categoryId: number;
    @ApiProperty() @Expose() languageId: number;
    @ApiProperty() @Expose() difficultyId: number;
    @ApiProperty() @Expose() title: string;
    @ApiProperty() @Expose() image: string;
    @ApiProperty() @Expose() price: number;
    @ApiProperty() @Expose() newPrice: number;
    @ApiProperty() @Expose() isPublished: boolean;
    @ApiProperty() @Expose() reviewsCount: number;
    @ApiProperty() @Expose() rating: number;
    @ApiProperty() @Expose() sectionsCount: number;
    @ApiProperty() @Expose() lessonsCount: number;
    @ApiProperty() @Expose() createdAt: Date;
}
