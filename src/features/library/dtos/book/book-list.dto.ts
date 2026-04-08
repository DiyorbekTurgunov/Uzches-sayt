import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BookListDto {
    @ApiProperty() @Expose() id: number;
    @ApiProperty() @Expose() authorId: number;
    @ApiProperty() @Expose() categoryId: number;
    @ApiProperty() @Expose() languageId: number;
    @ApiProperty() @Expose() difficultyId: number;
    @ApiProperty() @Expose() title: string;
    @ApiProperty() @Expose() description: string;
    @ApiProperty() @Expose() image: string;
    @ApiProperty() @Expose() price: number;
    @ApiProperty() @Expose() newPrice: number;
    @ApiProperty() @Expose() rating: number;
    @ApiProperty() @Expose() reviewsCount: number;
    @ApiProperty() @Expose() pages: number;
    @ApiProperty() @Expose() pubDate: Date;
    @ApiProperty() @Expose() createdAt: Date;
}
