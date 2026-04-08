import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class LanguageUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(32)
    @IsOptional()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(6)
    @IsOptional()
    code: string;
}
