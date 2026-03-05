import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../../core/Base-module";

@Entity('difficulties')
export class DifficultyEntity extends BaseModel {

    @Column({ type: 'varchar', length: 32 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    icon: string;

}