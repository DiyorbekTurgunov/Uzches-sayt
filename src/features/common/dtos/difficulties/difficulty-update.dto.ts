import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class DifficultyUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(32)
    @IsOptional()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    icon: string;
}
