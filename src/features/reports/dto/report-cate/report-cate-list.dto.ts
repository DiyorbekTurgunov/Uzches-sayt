import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ReportCateListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    title: string;

    @ApiProperty()
    @Expose()
    order: number;
}
