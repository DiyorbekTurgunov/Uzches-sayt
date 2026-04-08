import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class CoursePurchUpdateDto {
    @ApiProperty({ required: false })
    @IsBoolean()
    @IsOptional()
    isCompleted: boolean;
}
