import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class BookReviewCreateDto {
    @ApiProperty()
    @IsInt()
    @Type(() => Number)
    bookId: number;

    @ApiProperty({ minimum: 1, maximum: 5 })
    @IsInt()
    @Min(1)
    @Max(5)
    @Type(() => Number)
    rating: number;

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(512)
    @IsOptional()
    comment: string;
}
