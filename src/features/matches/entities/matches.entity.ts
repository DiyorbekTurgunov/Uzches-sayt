import {Column, Entity, ManyToOne} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {MatchType} from "../../../core/enums/matchType.enum";
import { WinnerType } from "../../../core/enums/winnerType.enum";
import {PlayerEntity} from "../../players/entities/player.entity";

@Entity('matches')
export class MatchesEntity extends BaseEntity {

    @ManyToOne(() => PlayerEntity)
    firstPlayer: PlayerEntity;

    @Column()
    FirstPlayerId: number;

    @Column()
    firstPlayerResult: number;

    @ManyToOne(() => PlayerEntity)
    secondPlayer: PlayerEntity;

    @Column()
    secondPlayerId: number;

    @Column()
    secondPlayerResult: number;

    @Column({ type: 'enum', enum: MatchType})
    type: MatchType;

    @Column()
    moves: number;

    @Column({ type: 'date'})
    date: Date;

    @Column({ type: 'enum', enum: WinnerType })
    winner: WinnerType;

}