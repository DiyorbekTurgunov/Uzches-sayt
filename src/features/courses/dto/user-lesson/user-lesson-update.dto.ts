import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UserLessonUpdateDto {
    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    stoppedAt: number;

    @ApiProperty({ required: false })
    @IsBoolean()
    @IsOptional()
    isCompleted: boolean;
}
