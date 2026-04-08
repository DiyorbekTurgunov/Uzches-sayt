import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class PlayerUpdateDto {
    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    countryId: number;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(64)
    @IsOptional()
    fullName: string;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(128)
    @IsOptional()
    image: string;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    classic: number;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    rapid: number;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    blitz: number;
}
