import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { ReportType } from '../../../../core/enums/report-type.enum';

export class ReportCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    categoryId: number;

    @ApiProperty({ enum: ReportType })
    @IsEnum(ReportType)
    target: ReportType;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    targetId: number;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(256)
    @IsOptional()
    description: string;
}
