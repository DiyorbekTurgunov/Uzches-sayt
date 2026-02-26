import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {UserEntity} from "../../users/entities/user.entity";
import {BooksEntity} from "../../books/entities/books.entity";

@Entity('bookReviews')
export class BookReviewsEntity extends BaseEntity{

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

    @Column({ type: 'varchar', length: 512 })
    comment: string;

    @Column({ type: 'timestamp'})
    date: Timestamp;
}