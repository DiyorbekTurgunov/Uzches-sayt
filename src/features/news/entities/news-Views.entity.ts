import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseModel} from "../../../core/Base-module";
import {UserEntity} from "../../users/entities/user.entity";
import {NewsEntity} from "./news.entity";

@Entity('newsViews')
export class NewsViews extends BaseModel {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => NewsEntity)
    news: NewsEntity;

    @Column()
    newsId: number;

    @Column({ type: 'timestamp'})
    firstDate: Timestamp;

    @Column({ type: 'timestamp'})
    lastDate: Timestamp;

    @Column({ default: 1 })
    count: number
}