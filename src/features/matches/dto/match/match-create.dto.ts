import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { MatchType } from '../../../../core/enums/match-type.enum';
import { WinnerType } from '../../../../core/enums/winner-type.enum';

export class MatchCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    firstPlayerId: number;

    @ApiProperty()
    @IsInt()
    @Min(0)
    @Type(() => Number)
    firstPlayerResult: number;

    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    secondPlayerId: number;

    @ApiProperty()
    @IsInt()
    @Min(0)
    @Type(() => Number)
    secondPlayerResult: number;

    @ApiProperty({ enum: MatchType })
    @IsEnum(MatchType)
    type: MatchType;

    @ApiProperty()
    @IsInt()
    @Min(1)
    @Type(() => Number)
    moves: number;

    @ApiProperty()
    @IsDateString()
    date: string;

    @ApiProperty({ enum: WinnerType })
    @IsEnum(WinnerType)
    winner: WinnerType;
}
