import { Column, Entity, ManyToOne } from 'typeorm';
import type { Relation} from 'typeorm';
import { BaseModel } from '../../../core/Base-module';
import type { ReportCategoryEntity } from './report-category.entity';
import { ReportType } from '../../../core/enums/report-type.enum';
import type { UserEntity } from '../../authentication/entities/user.entity';

@Entity('reports')
export class ReportEntity extends BaseModel {

    @ManyToOne('UserEntity', { onDelete: 'CASCADE' })
    user: Relation<UserEntity>;

    @Column()
    userId: number;

    @ManyToOne('ReportCategoryEntity')
    category: Relation<ReportCategoryEntity>;

    @Column()
    categoryId: number;

    @Column({ type: 'enum', enum: ReportType })
    target: ReportType;

    @Column()
    targetId: number;

    @Column({ type: 'varchar', length: 256, nullable: true })
    description: string;
}
