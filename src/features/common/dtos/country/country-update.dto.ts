import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CountryUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(64)
    @IsOptional()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    flag: string;
}
