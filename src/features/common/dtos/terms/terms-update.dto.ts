import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class TermsUpdateDto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    content: string;
}
