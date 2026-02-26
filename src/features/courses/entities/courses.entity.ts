import {Column, Entity, ManyToOne} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {AuthorEntity} from "../../authors/entities/authors.entity";
import {LanguagesEntity} from "../../languages/entities/laguages.entity";
import {DifficultyEntity} from "../../difficulties/entities/difficulties.entity";

@Entity('courses')
export class CoursesEntity extends BaseEntity {

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
    discountPrice: number;

    @Column()
    reviewsCount: number;

    @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true})
    rating: number;

    @Column()
    numOfSections: number;

    @Column()
    numOfLessons: number;
}