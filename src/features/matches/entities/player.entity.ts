import { Column, Entity, ManyToOne} from 'typeorm';
import type { Relation } from "typeorm";
import { BaseModel } from '../../../core/Base-module';
import type { CountryEntity } from '../../common/entites/country.entity';

@Entity('players')
export class PlayerEntity extends BaseModel {

    @ManyToOne('CountryEntity')
    country: Relation<CountryEntity>;

    @Column()
    countryId: number;

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    image: string;

    @Column({ nullable: true })
    classic: number;

    @Column({ nullable: true })
    rapid: number;

    @Column({ nullable: true })
    blitz: number;
}
