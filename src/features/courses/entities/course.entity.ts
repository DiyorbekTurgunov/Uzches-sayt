import {Column, Entity, ManyToOne} from "typeorm";
import {BaseModel} from "../../../core/Base-module";
import {AuthorEntity} from "../../library/authors/entities/authors.entity";
import {LanguagesEntity} from "../../library/languages/entities/laguages.entity";
import {DifficultyEntity} from "../../common/difficulties/entities/difficulties.entity";

@Entity('courses')
export class Course extends BaseModel {

    @ManyToOne(() => AuthorEntity)
    author: AuthorEntity;

    @Column()
    authorId: number;

    @ManyToOne(() => LanguagesEntity)
    language: LanguagesEntity;

    @Column()
    languageId: number;

    @ManyToOne(() => DifficultyEntity)
    difficultyLevel: DifficultyEntity;

    @Column()
    difficultyLevelId: number;

    @Column({ type: 'varchar', length: 128 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    image: string;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    price: number;

    @Column({ type: 'decimal', precision: 12, scale: 2 ,nullable: true})
    newPrice: number;

    @Column({ default: 0 })
    reviewsCount: number;

    @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true})
    rating: number;

    @Column({ default: 0 })
    SectionsCount: number;

    @Column({ default: 0 })
    LessonsCount: number;
}