import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TermsCreateDto {
    @ApiProperty()
    @IsString()
    content: string;
}
