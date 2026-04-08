import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from '../../authentication/entities/user.entity';
import { BooksEntity } from './books.entity';

@Entity('bookLikes')
export class BooksLikedEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
    user: UserEntity;

    @PrimaryColumn()
    bookId: number;

    @ManyToOne(() => BooksEntity, { onDelete: 'CASCADE' })
    book: BooksEntity;

    @Column({ type: 'timestamp' })
    created: Date;
}
