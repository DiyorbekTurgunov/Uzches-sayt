import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CountryCreateDto {
    @ApiProperty()
    @IsString()
    @MaxLength(64)
    title: string;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    flag: string;
}
