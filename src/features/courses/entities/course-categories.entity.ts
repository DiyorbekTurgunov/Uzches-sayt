import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../core/Base-module";

@Entity()
export class CourseCategoriesEntity extends BaseModel {

    @Column({ type: 'varchar', length: 64 })
    title: string;
}