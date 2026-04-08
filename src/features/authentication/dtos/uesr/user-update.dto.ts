import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { LoginType } from '../../../../core/enums/login-type.enum';
import { Role } from '../../../../core/enums/role.enum';

export class UserUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(64)
    @IsOptional()
    fullName: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(64)
    @IsOptional()
    login: string;

    @ApiProperty({ enum: LoginType, required: false })
    @IsEnum(LoginType)
    @IsOptional()
    loginType: LoginType;

    @ApiProperty({ enum: Role, required: false })
    @IsEnum(Role)
    @IsOptional()
    role: Role;

    @ApiProperty({ required: false })
    @IsDateString()
    @IsOptional()
    birthDate: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    profileImage: string;
}
