import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/Base-module';

@Entity('news')
export class NewsEntity extends BaseModel {

    @Column({ type: 'varchar', length: 256 })
    title: string;

    @Column({ type: 'varchar', length: 128 })
    image: string;

    @Column({ type: 'text' })
    content: string;

    @Column({ type: 'timestamp' })
    date: Date;
}
