import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { LoginType } from '../../../../core/enums/login-type.enum';
import { Role } from '../../../../core/enums/role.enum';

export class UserListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    fullName: string;

    @ApiProperty()
    @Expose()
    login: string;

    @ApiProperty({ enum: LoginType })
    @Expose()
    loginType: LoginType;

    @ApiProperty({ enum: Role })
    @Expose()
    role: Role;

    @ApiProperty()
    @Expose()
    profileImage: string;

    @ApiProperty()
    @Expose()
    birthDate: Date;

    @ApiProperty()
    @Expose()
    isVerified: boolean;

    @ApiProperty()
    @Expose()
    isActive: boolean;

    @ApiProperty()
    @Expose()
    createdAt: Date;
}
