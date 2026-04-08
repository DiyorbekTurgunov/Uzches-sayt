import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/Base-module';
import { UserEntity } from '../../authentication/entities/user.entity';
import { BooksEntity } from './books.entity';

@Entity('bookReviews')
export class BooksReviewsEntity extends BaseModel {

    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => BooksEntity, { onDelete: 'CASCADE' })
    book: BooksEntity;

    @Column()
    bookId: number;

    @Column({ type: 'int' })
    rating: number;

    @Column({ type: 'varchar', length: 512, nullable: true })
    comment: string;
}
