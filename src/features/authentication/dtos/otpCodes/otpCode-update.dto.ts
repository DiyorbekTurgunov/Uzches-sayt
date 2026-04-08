import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { OtpType } from '../../../../core/enums/otp-type.enum';

export class OtpCodeUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @Length(6, 6)
    @IsOptional()
    code: string;

    @ApiProperty({ enum: OtpType, required: false })
    @IsEnum(OtpType)
    @IsOptional()
    type: OtpType;
}
