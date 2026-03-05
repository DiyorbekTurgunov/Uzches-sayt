import { Column, Entity } from 'typeorm'
import {BaseModel} from "../../../../core/Base-module";

@Entity('authors')
export class AuthorEntity extends BaseModel {

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

}