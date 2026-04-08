import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/Base-module';
import { OtpType } from '../../../core/enums/otp-type.enum';
import { UserEntity } from './user.entity';

@Entity('otpCodes')
export class OtpCodeEntity extends BaseModel {

    @Column()
    userId: number;

    @ManyToOne(() => UserEntity, (user) => user.otpCodes, { onDelete: 'CASCADE' })
    user: UserEntity;

    @Column({ type: 'varchar', length: 6 })
    code: string;

    @Column({ type: 'timestamp' })
    date: Date;

    @Column({ type: 'enum', enum: OtpType })
    type: OtpType;
}
