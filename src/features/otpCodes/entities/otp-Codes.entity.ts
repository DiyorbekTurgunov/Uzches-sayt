import {Column, Entity, ManyToOne, Timestamp} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {UserEntity} from "../../users/entities/user.entity";
import {OtpTypeEnum} from "../../../core/enums/otpType.enum";

@Entity()
export class OtpCodesEntity extends BaseEntity {

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @Column({ type: 'varchar', length: 6 })
    code: string;

    @Column({ type: 'timestamp'})
    date: Timestamp;

    @Column({ type: 'enum', enum: OtpTypeEnum})
    type: OtpTypeEnum;
}