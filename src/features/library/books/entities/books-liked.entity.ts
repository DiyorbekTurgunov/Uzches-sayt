import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseModel} from "../../../../core/Base-module";
import {UserEntity} from "../../../users/entities/user.entity";
import {BooksEntity} from "./books.entity";

@Entity('booksLiked')
export class BooksLikedEntity extends BaseModel {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => BooksEntity)
    book: BooksEntity;

    @Column()
    bookId: number;

    @Column({ type: 'timestamp' })
    date: Timestamp;
}