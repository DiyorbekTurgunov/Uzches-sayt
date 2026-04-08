import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ReportEntity } from './entities/report.entity';
import { ReportCategoryEntity } from './entities/report-category.entity';
import { ReportService } from './services/report.service';
import { ReportCategoryService } from './services/report-category.service';
import { ReportController } from './controllers/report.controller';
import { ReportCategoryController } from './controllers/report-category.controller';
import { jwtModuleConfig } from '../../configs/jwt-module.config';

@Module({
    imports: [
        TypeOrmModule.forFeature([ReportEntity, ReportCategoryEntity]),
        JwtModule.register(jwtModuleConfig),
    ],
    controllers: [ReportController, ReportCategoryController],
    providers: [ReportService, ReportCategoryService],
})
export class ReportsModule {}
