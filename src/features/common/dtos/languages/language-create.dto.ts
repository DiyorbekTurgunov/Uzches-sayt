import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class LanguageCreateDto {
    @ApiProperty()
    @IsString()
    @MaxLength(32)
    title: string;

    @ApiProperty()
    @IsString()
    @MaxLength(6)
    code: string;
}
