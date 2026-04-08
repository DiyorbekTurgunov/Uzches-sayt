import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ReportType } from '../../../../core/enums/report-type.enum';

export class ReportListDto {
    @ApiProperty() @Expose() id: number;
    @ApiProperty() @Expose() userId: number;
    @ApiProperty() @Expose() categoryId: number;
    @ApiProperty({ enum: ReportType }) @Expose() target: ReportType;
    @ApiProperty() @Expose() targetId: number;
    @ApiProperty() @Expose() description: string;
    @ApiProperty() @Expose() createdAt: Date;
}
