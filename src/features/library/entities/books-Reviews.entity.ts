import { Column, Entity, ManyToOne} from 'typeorm';
import type { Relation } from "typeorm";
import { BaseModel } from '../../../core/Base-module';
import type { UserEntity } from '../../authentication/entities/user.entity';
import type { BooksEntity } from './books.entity';

@Entity('bookReviews')
export class BooksReviewsEntity extends BaseModel {

    @ManyToOne('UserEntity', { onDelete: 'CASCADE' })
    user: Relation<UserEntity>;

    @Column()
    userId: number;

    @ManyToOne('BooksEntity', { onDelete: 'CASCADE' })
    book: Relation<BooksEntity>;

    @Column()
    bookId: number;

    @Column({ type: 'int' })
    rating: number;

    @Column({ type: 'varchar', length: 512, nullable: true })
    comment: string;
}
