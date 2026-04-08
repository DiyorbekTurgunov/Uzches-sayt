import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class AuthorCreateDto {
    @ApiProperty()
    @IsString()
    @MaxLength(64)
    fullName: string;
}
