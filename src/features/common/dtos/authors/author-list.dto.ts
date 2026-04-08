import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AuthorListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    fullName: string;

    @ApiProperty()
    @Expose()
    createdAt: Date;
}
