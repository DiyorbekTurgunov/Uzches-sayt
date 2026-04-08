import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class DifficultyListDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    title: string;

    @ApiProperty()
    @Expose()
    icon: string;
}
