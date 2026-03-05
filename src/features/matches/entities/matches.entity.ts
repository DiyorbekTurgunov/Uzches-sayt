import {Column, Entity, ManyToOne} from "typeorm";
import {BaseModel} from "../../../core/Base-module";
import {MatchType} from "../../../core/enums/match-type.enum";
import { WinnerType } from "../../../core/enums/winner-type.enum";
import {PlayerEntity} from "./player.entity";

@Entity('matches')
export class MatchesEntity extends BaseModel {

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