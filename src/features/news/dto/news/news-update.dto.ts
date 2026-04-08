import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class NewsUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(256)
    @IsOptional()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    image: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    content: string;
}
