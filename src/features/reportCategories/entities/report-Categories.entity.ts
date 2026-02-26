import {Column, Entity} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";

@Entity('report-Categories')
export class ReportCategoriesEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 64 })
    title: string;

    @Column({ nullable: true })
    order: number
}