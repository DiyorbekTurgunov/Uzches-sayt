import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../../core/Base-module";

@Entity('languages')
export class LanguagesEntity extends BaseModel {

    @Column({ type: 'varchar', length: 32 })
    title: string;

    @Column({ type: 'varchar', length: 6 })
    code: string;
}