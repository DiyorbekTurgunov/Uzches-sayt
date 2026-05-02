import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UploadController } from './upload.controller';
import { jwtModuleConfig } from '../../configs/jwt-module.config';

@Module({
    imports: [JwtModule.register(jwtModuleConfig)],
    controllers: [UploadController],
})
export class UploadModule {}
