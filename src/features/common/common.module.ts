import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthorEntity } from './entites/authors.entity';
import { CountryEntity } from './entites/country.entity';
import { LanguagesEntity } from './entites/laguages.entity';
import { DifficultyEntity } from './entites/difficulty.entity';
import { TermsEntity } from './entites/terms.entity';
import { AuthorService } from './services/author.service';
import { CountryService } from './services/country.service';
import { LanguageService } from './services/language.service';
import { DifficultyService } from './services/difficulty.service';
import { TermsService } from './services/terms.service';
import { AuthorController } from './controllers/author.controller';
import { CountryController } from './controllers/country.controller';
import { LanguageController } from './controllers/language.controller';
import { DifficultyController } from './controllers/difficulty.controller';
import { TermsController } from './controllers/terms.controller';
import { jwtModuleConfig } from '../../configs/jwt-module.config';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            AuthorEntity,
            CountryEntity,
            LanguagesEntity,
            DifficultyEntity,
            TermsEntity,
        ]),
        JwtModule.register(jwtModuleConfig),
    ],
    controllers: [
        AuthorController,
        CountryController,
        LanguageController,
        DifficultyController,
        TermsController,
    ],
    providers: [
        AuthorService,
        CountryService,
        LanguageService,
        DifficultyService,
        TermsService,
    ],
})
export class CommonModule {}
