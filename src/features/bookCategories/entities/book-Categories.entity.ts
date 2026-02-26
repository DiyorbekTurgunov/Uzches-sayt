import {Column, Entity} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";

@Entity('bookCategories')
export class BookCategoriesEntity extends BaseEntity{

    @Column({ type: "varchar", length: 64 })
    title: string;
}