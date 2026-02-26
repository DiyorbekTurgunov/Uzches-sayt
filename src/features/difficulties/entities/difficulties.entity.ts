import {Column, Entity} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";

@Entity('difficulties')
export class DifficultyEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 32 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    icon: string;

}