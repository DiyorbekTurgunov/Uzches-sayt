import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtModuleConfig: JwtModuleAsyncOptions = {
    useFactory: () => ({
        global: true,
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '3h' },
    }),
};
