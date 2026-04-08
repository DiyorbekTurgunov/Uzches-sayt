import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class NewsViewCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    newsId: number;
}
