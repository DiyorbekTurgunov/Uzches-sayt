import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class ReportCateUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(64)
    @IsOptional()
    title: string;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    order: number;
}
