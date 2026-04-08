import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'typeorm';

@Entity('terms')
export class TermsEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    content: string;
}
