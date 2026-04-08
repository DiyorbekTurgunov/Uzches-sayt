import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PlayerListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    countryId: number;

    @ApiProperty()
    @Expose()
    fullName: string;

    @ApiProperty()
    @Expose()
    image: string;

    @ApiProperty()
    @Expose()
    classic: number;

    @ApiProperty()
    @Expose()
    rapid: number;

    @ApiProperty()
    @Expose()
    blitz: number;
}
