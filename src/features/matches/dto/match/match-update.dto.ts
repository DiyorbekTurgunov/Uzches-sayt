import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { MatchType } from '../../../../core/enums/match-type.enum';
import { WinnerType } from '../../../../core/enums/winner-type.enum';

export class MatchUpdateDto {
    @ApiProperty({ required: false })
    @IsInt()
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    firstPlayerResult: number;

    @ApiProperty({ required: false })
    @IsInt()
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    secondPlayerResult: number;

    @ApiProperty({ enum: MatchType, required: false })
    @IsEnum(MatchType)
    @IsOptional()
    type: MatchType;

    @ApiProperty({ required: false })
    @IsInt()
    @Min(1)
    @IsOptional()
    @Type(() => Number)
    moves: number;

    @ApiProperty({ required: false })
    @IsDateString()
    @IsOptional()
    date: string;

    @ApiProperty({ enum: WinnerType, required: false })
    @IsEnum(WinnerType)
    @IsOptional()
    winner: WinnerType;
}
