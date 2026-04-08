import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class NewsViewListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    userId: number;

    @ApiProperty()
    @Expose()
    newsId: number;

    @ApiProperty()
    @Expose()
    firstViewedAt: Date;

    @ApiProperty()
    @Expose()
    lastViewedAt: Date;

    @ApiProperty()
    @Expose()
    count: number;
}
