import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../core/Base-module";

@Entity('report-Categories')
export class ReportCategoriesEntity extends BaseModel {

    @Column({ type: 'varchar', length: 64 })
    title: string;

    @Column({ nullable: true })
    order: number
}