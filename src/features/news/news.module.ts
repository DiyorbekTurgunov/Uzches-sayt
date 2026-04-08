import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { NewsEntity } from './entities/news.entity';
import { NewsViewsEntity } from './entities/news-Views.entity';
import { NewsService } from './services/news.service';
import { NewsController } from './controllers/news.controller';
import { jwtModuleConfig } from '../../configs/jwt-module.config';

@Module({
    imports: [
        TypeOrmModule.forFeature([NewsEntity, NewsViewsEntity]),
        JwtModule.register(jwtModuleConfig),
    ],
    controllers: [NewsController],
    providers: [NewsService],
})
export class NewsModule {}
