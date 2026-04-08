import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class NewsCreateDto {
    @ApiProperty()
    @IsString()
    @MaxLength(256)
    title: string;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    image: string;

    @ApiProperty()
    @IsString()
    content: string;
}
