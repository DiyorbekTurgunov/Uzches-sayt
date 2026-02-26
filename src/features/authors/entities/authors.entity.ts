import { Column, Entity } from 'typeorm'
import {BaseEntity} from "../../../core/Base-module";

@Entity('authors')
export class AuthorEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

}