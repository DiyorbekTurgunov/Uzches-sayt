import {Column, Entity, ManyToOne} from "typeorm";
import {BaseModel} from "../../../core/Base-module";
import {CountriesEntity} from "./countries.entity";

@Entity('player')
export class PlayerEntity extends BaseModel {

    @ManyToOne(() => CountriesEntity)
    country: CountriesEntity;

    @Column()
    CountryId: number;

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    image: string;

    @Column({ nullable: true })
    classic: string;

    @Column({ nullable: true })
    rapid: string;

    @Column({ nullable: true })
    blitz: string;

}