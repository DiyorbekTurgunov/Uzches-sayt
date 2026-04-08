import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class ReportUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(256)
    @IsOptional()
    description: string;
}
