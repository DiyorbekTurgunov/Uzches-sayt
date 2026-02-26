import {Column, Entity, ManyToOne} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {CountriesEntity} from "../../countries/entities/countries.entity";

@Entity('player')
export class PlayerEntity extends BaseEntity {

    @ManyToOne(() => CountriesEntity)
    country: CountriesEntity;

    @Column()
    CountryId: number;

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

    @Column({ type: 'varchar', length: 128 })
    image: string;

    @Column()
    classic: string;

    @Column()
    rapid: string;

    @Column()
    blitz: string;

}