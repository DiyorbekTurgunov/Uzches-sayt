import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { MatchType } from '../../../../core/enums/match-type.enum';
import { WinnerType } from '../../../../core/enums/winner-type.enum';

export class MatchListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    firstPlayerId: number;

    @ApiProperty()
    @Expose()
    firstPlayerResult: number;

    @ApiProperty()
    @Expose()
    secondPlayerId: number;

    @ApiProperty()
    @Expose()
    secondPlayerResult: number;

    @ApiProperty({ enum: MatchType })
    @Expose()
    type: MatchType;

    @ApiProperty()
    @Expose()
    moves: number;

    @ApiProperty()
    @Expose()
    date: Date;

    @ApiProperty({ enum: WinnerType })
    @Expose()
    winner: WinnerType;
}
