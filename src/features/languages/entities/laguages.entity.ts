import {Column, Entity} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";

@Entity('languages')
export class LanguagesEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 32 })
    title: string;

    @Column({ type: 'varchar', length: 6 })
    code: string;
}