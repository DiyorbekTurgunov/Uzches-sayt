import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { OtpType } from '../../../../core/enums/otp-type.enum';

export class OtpCodeListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    userId: number;

    @ApiProperty()
    @Expose()
    code: string;

    @ApiProperty({ enum: OtpType })
    @Expose()
    type: OtpType;

    @ApiProperty()
    @Expose()
    createdAt: Date;
}
