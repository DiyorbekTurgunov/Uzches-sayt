import {Column, Entity} from "typeorm";
import {BaseEntity} from "../../../core/Base-module";
import {LoginTypeEnum} from "../../../core/enums/loginType.enum";

@Entity('user')
export class UserEntity extends BaseEntity {

    @Column({ type: 'varchar', length: 64 })
    fullName: string;

    @Column({ type: 'varchar', length: 128 })
    profileImage: string;

    @Column({ type: 'varchar', length: 64 })
    login: string;

    @Column({ type: 'enum', enum: LoginTypeEnum })
    loginType: LoginTypeEnum;

    @Column({ type: 'varchar', length: 128 })
    password: string;

    @Column({ type: 'date'})
    birthDate: Date;

    @Column()
    isVerified: boolean;

    @Column()
    isActive: boolean;
}