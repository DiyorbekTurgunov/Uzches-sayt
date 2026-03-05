import {BaseModel} from "../../../core/Base-module";
import {Column, Entity} from "typeorm";

@Entity('countries')
export class CountriesEntity extends BaseModel {

    @Column({ type: 'varchar', length: 64})
    title: string;

    @Column({ type: 'varchar', length: 128 })
    flag: string;
}