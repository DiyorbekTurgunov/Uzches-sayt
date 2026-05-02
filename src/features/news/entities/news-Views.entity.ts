import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import type { UserEntity } from '../../authentication/entities/user.entity';
import type { NewsEntity } from './news.entity';

@Entity('newsViews')
export class NewsViewsEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne('UserEntity', { onDelete: 'CASCADE' })
    user: Relation<UserEntity>;

    @PrimaryColumn()
    newsId: number;

    @ManyToOne('NewsEntity', { onDelete: 'CASCADE' })
    news: Relation<NewsEntity>;

    @Column({ type: 'timestamp' })
    firstDate: Date;

    @Column({ type: 'timestamp' })
    lastDate: Date;

    @Column({ default: 1 })
    count: number;
}
