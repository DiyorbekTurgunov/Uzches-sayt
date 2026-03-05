import { BaseModel } from "../../../core/Base-module";
import { Column, Entity, ManyToOne } from 'typeorm';
import { OtpType } from "../../../core/enums/otp-type.enum";
import { UserEntity } from "../../users/entities/user.entity";

@Entity('otpCodes')
export class OtpCodeEntity extends BaseModel {
    @Column()
    userId!: number;

    @ManyToOne(() => UserEntity, (user) => user.otpCodes, { onDelete: 'CASCADE' })
    user?: UserEntity;

    @Column({ length: 6 })
    code!: string;

    @Column({ type: 'enum', enum: OtpType })
    type!: OtpType;
}