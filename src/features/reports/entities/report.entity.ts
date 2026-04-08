import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/Base-module';
import { ReportCategoryEntity } from './report-category.entity';
import { ReportType } from '../../../core/enums/report-type.enum';
import { UserEntity } from '../../authentication/entities/user.entity';

@Entity('reports')
export class ReportEntity extends BaseModel {

    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => ReportCategoryEntity)
    category: ReportCategoryEntity;

    @Column()
    categoryId: number;

    @Column({ type: 'enum', enum: ReportType })
    target: ReportType;

    @Column()
    targetId: number;

    @Column({ type: 'varchar', length: 256, nullable: true })
    description: string;
}
