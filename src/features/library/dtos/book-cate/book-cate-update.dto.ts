import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class BookCateUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(64)
    @IsOptional()
    title: string;
}
