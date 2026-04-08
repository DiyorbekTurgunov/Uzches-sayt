import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from '../../authentication/entities/user.entity';
import { NewsEntity } from './news.entity';

@Entity('newsViews')
export class NewsViewsEntity {

    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
    user: UserEntity;

    @PrimaryColumn()
    newsId: number;

    @ManyToOne(() => NewsEntity, { onDelete: 'CASCADE' })
    news: NewsEntity;

    @Column({ type: 'timestamp' })
    firstDate: Date;

    @Column({ type: 'timestamp' })
    lastDate: Date;

    @Column({ default: 1 })
    count: number;
}
