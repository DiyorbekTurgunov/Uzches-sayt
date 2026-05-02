import { Column, Entity, ManyToOne, PrimaryColumn} from 'typeorm';
import type { Relation } from "typeorm";
import type { UserEntity } from '../../authentication/entities/user.entity';
import type { BooksEntity } from './books.entity';

@Entity('bookLikes')
export class BooksLikedEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne('UserEntity', { onDelete: 'CASCADE' })
    user: Relation<UserEntity>;

    @PrimaryColumn()
    bookId: number;

    @ManyToOne('BooksEntity', { onDelete: 'CASCADE' })
    book: Relation<BooksEntity>;

    @Column({ type: 'timestamp' })
    created: Date;
}
