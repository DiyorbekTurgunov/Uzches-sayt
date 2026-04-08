import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { LoginType } from '../../../../core/enums/login-type.enum';
import { Role } from '../../../../core/enums/role.enum';

export class UserCreateDto {
    @ApiProperty()
    @IsString()
    @MaxLength(64)
    fullName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(64)
    login: string;

    @ApiProperty({ enum: LoginType })
    @IsEnum(LoginType)
    loginType: LoginType;

    @ApiProperty({ enum: Role, required: false })
    @IsEnum(Role)
    @IsOptional()
    role: Role;

    @ApiProperty({ required: false })
    @IsDateString()
    @IsOptional()
    birthDate: string;
}
