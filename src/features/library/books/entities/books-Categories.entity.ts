import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../../core/Base-module";

@Entity('bookCategories')
export class BooksCategoriesEntity extends BaseModel {

    @Column({ type: "varchar", length: 64 })
    title: string;
}