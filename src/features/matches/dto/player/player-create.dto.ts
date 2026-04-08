import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class PlayerCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    countryId: number;

    @ApiProperty()
    @IsString()
    @MaxLength(64)
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
