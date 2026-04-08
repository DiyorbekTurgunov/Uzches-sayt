import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TermsListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    content: string;

    @ApiProperty()
    @Expose()
    updatedAt: Date;
}
