import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BookReviewListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    userId: number;

    @ApiProperty()
    @Expose()
    bookId: number;

    @ApiProperty()
    @Expose()
    rating: number;

    @ApiProperty()
    @Expose()
    comment: string;

    @ApiProperty()
    @Expose()
    createdAt: Date;
}
