import {Column, Entity, ManyToOne} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {AuthorEntity} from "../../authors/entities/authors.entity";
import {BookCategoriesEntity} from "../../bookCategories/entities/book-Categories.entity";
import {LanguagesEntity} from "../../languages/entities/laguages.entity";
import {DifficultyEntity} from "../../difficulties/entities/difficulties.entity";

@Entity('books')
export class BooksEntity extends BaseEntity {

    @ManyToOne(() => AuthorEntity)
    author: AuthorEntity;

    @Column()
    authorId: number;

    @ManyToOne(() => BookCategoriesEntity)
    category: BookCategoriesEntity;

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

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type : 'varchar', length: 128, nullable: true })
    bookImage: string;

    @Column({ type: 'decimal', length: 12.2 })
    price: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
    newPrice: number;

    @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
    rating: number;

    @Column()
    reviewCount: number;

    @Column()
    pages: number;

    @Column({ type: 'date'})
    pubDate: Date;

}