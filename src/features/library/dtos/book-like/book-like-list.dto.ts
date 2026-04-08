import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BookLikeListDto {
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
    createdAt: Date;
}
