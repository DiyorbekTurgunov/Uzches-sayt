import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/Base-module';

@Entity('countries')
export class CountryEntity extends BaseModel {

    @Column({ type: 'varchar', length: 64 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    flag: string;
}
