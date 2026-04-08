import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { MatchesEntity } from './entities/matches.entity';
import { PlayerEntity } from './entities/player.entity';
import { MatchService } from './services/match.service';
import { PlayerService } from './services/player.service';
import { MatchController } from './controllers/match.controller';
import { PlayerController } from './controllers/player.controller';
import { jwtModuleConfig } from '../../configs/jwt-module.config';

@Module({
    imports: [
        TypeOrmModule.forFeature([MatchesEntity, PlayerEntity]),
        JwtModule.register(jwtModuleConfig),
    ],
    controllers: [MatchController, PlayerController],
    providers: [MatchService, PlayerService],
})
export class MatchesModule {}
