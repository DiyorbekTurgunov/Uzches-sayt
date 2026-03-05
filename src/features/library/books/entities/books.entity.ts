import {Column, Entity, ManyToOne} from "typeorm";
import {BaseModel} from "../../../../core/Base-module";
import {AuthorEntity} from "../../authors/entities/authors.entity";
import {BooksCategoriesEntity} from "./books-Categories.entity";
import {LanguagesEntity} from "../../languages/entities/laguages.entity";
import {DifficultyEntity} from "../../../common/difficulties/entities/difficulties.entity";

@Entity('books')
export class Book extends BaseModel {

    @ManyToOne(() => AuthorEntity)
    author: AuthorEntity;

    @Column()
    authorId: number;

    @ManyToOne(() => BooksCategoriesEntity)
    category: BooksCategoriesEntity;

    @Column()
    categoryId: number;

    @ManyToOne(() => LanguagesEntity)
    language: LanguagesEntity;

    @Column()
    languageId: number;

    @ManyToOne(() => DifficultyEntity)
    difficulty: DifficultyEntity;

    @Column()
    difficultyId: number;

    @Column({ type: 'varchar', length: 128 })
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type : 'varchar', length: 128, nullable: true })
    Image: string;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    price: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
    newPrice: number;

    @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
    rating: number;

    @Column({ default: 0 })
    reviewCount: number;

    @Column()
    pages: number;

    @Column({ type: 'date'})
    pubDate: Date;

}