import { Column, Entity, ManyToOne} from 'typeorm';
import type { Relation } from "typeorm";
import { BaseModel } from '../../../core/Base-module';
import { MatchType } from '../../../core/enums/match-type.enum';
import { WinnerType } from '../../../core/enums/winner-type.enum';
import type { PlayerEntity } from './player.entity';

@Entity('matches')
export class MatchesEntity extends BaseModel {

    @ManyToOne('PlayerEntity')
    firstPlayer: Relation<PlayerEntity>;

    @Column()
    firstPlayerId: number;

    @Column()
    firstPlayerResult: number;

    @ManyToOne('PlayerEntity')
    secondPlayer: Relation<PlayerEntity>;

    @Column()
    secondPlayerId: number;

    @Column()
    secondPlayerResult: number;

    @Column({ type: 'enum', enum: MatchType })
    type: MatchType;

    @Column()
    moves: number;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'enum', enum: WinnerType })
    winner: WinnerType;
}
