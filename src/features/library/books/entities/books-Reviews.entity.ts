import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseModel} from "../../../../core/Base-module";
import {UserEntity} from "../../../users/entities/user.entity";
import {BooksEntity} from "./books.entity";

@Entity('bookReviews')
export class BooksReviewsEntity extends BaseModel {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => BooksEntity)
    book: BooksEntity;

    @Column()
    bookId: number;

    @Column()
    rating: number;

    @Column({ type: 'varchar', length: 512, nullable: true })
    comment: string;

    @Column({ type: 'timestamp'})
    date: Timestamp;
}