import {Column, Entity, OneToMany} from 'typeorm';
import { BaseModel } from '../../../core/Base-module';

@Entity('difficulties')
export class DifficultyEntity extends BaseModel {

    @Column({ type: 'varchar',unique:true, length: 32 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    icon: string;



}
