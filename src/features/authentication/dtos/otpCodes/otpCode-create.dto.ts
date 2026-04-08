import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsString, Length } from 'class-validator';
import { OtpType } from '../../../../core/enums/otp-type.enum';

export class OtpCodeCreateDto {
    @ApiProperty()
    @IsInt()
    userId: number;

    @ApiProperty()
    @IsString()
    @Length(6, 6)
    code: string;

    @ApiProperty({ enum: OtpType })
    @IsEnum(OtpType)
    type: OtpType;
}
