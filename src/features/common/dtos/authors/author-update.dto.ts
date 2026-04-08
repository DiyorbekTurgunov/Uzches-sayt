import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class AuthorUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(64)
    @IsOptional()
    fullName: string;
}
