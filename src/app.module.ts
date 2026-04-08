import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './data-source';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { CoursesModule } from './features/courses/courses.module';
import { LibraryModule } from './features/library/library.module';
import { NewsModule } from './features/news/news.module';
import { MatchesModule } from './features/matches/matches.module';
import { ReportsModule } from './features/reports/reports.module';
import { CommonModule } from './features/common/common.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeormConfig),
        AuthenticationModule,
        CoursesModule,
        LibraryModule,
        NewsModule,
        MatchesModule,
        ReportsModule,
        CommonModule,
    ],
})
export class AppModule {}
