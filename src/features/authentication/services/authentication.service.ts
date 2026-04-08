import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';
import { UserEntity } from '../entities/user.entity';
import { OtpCodeEntity } from '../entities/otp-codes.entity';
import { OtpType } from '../../../core/enums/otp-type.enum';
import { SignInDto } from '../dtos/sign-in.dto';
import { SignUpDto } from '../dtos/sign-up.dto';
import { VerifyOtpDto } from '../dtos/verify-otp.dto';
import { ResendOtpDto } from '../dtos/resend-otp.dto';
import { SetPasswordDto } from '../dtos/set-password.dto';
import { OtpCodeService } from './otp-code.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly otpService: OtpCodeService,
    ) {}

    async signUp(payload: SignUpDto) {
        let exists = await UserEntity.countBy({ login: payload.login });
        if (exists) {
            throw new BadRequestException('User with given login already exists');
        }

        let newUser = UserEntity.create(payload as UserEntity);
        await UserEntity.save(newUser);
        await this.otpService.sendOtp(newUser, OtpType.Register);
    }

    async signIn({ login, password }: SignInDto) {
        let user = await UserEntity.findOneBy({ login });
        if (!user || !user.password) {
            throw new UnauthorizedException();
        }

        if (!user.isActive || !user.isVerified) {
            throw new UnauthorizedException();
        }

        let secretKey = process.env.SECRET_KEY;
        if (!secretKey) {
            throw new InternalServerErrorException('No secret key found');
        }

        let passwordsMatch = await argon2.verify(user.password, password + secretKey);
        if (!passwordsMatch) {
            throw new UnauthorizedException();
        }

        let accessToken = this.jwtService.sign({ id: user.id, login: user.login, role: user.role });
        return { accessToken };
    }

    async verifyOtp({ login, code }: VerifyOtpDto) {
        let user = await UserEntity.findOneBy({ login });
        if (!user) {
            throw new BadRequestException('User with given login does not exist');
        }

        await this.otpService.verifyOtp(user.id, code);

        user.isVerified = true;
        await UserEntity.save(user);
    }

    async setPassword({ login, code, password }: SetPasswordDto) {
        let user = await UserEntity.findOneBy({ login });
        if (!user) {
            throw new BadRequestException('User with given login does not exist');
        }

        await this.otpService.verifyOtp(user.id, code);

        let secretKey = process.env.SECRET_KEY;
        if (!secretKey) {
            throw new InternalServerErrorException('No secret key found');
        }

        user.password = await argon2.hash(password + secretKey);
        user.isActive = true;
        await UserEntity.save(user);
    }

    async resendOtp({ login, loginType }: ResendOtpDto) {
        let user = await UserEntity.findOneBy({ login, loginType });
        if (!user) {
            throw new NotFoundException('User with given login does not exist');
        }

        let otpExpire = Number(process.env.OTP_EXPIRE) * 1000;

        let lastOtp = await OtpCodeEntity.findOne({
            where: { userId: user.id },
            order: { createdAt: 'DESC' },
        });

        if (lastOtp) {
            let difference = Date.now() - lastOtp.createdAt.getTime();
            if (difference < otpExpire) {
                throw new BadRequestException('Code not expired yet');
            }
        }

        await this.otpService.sendOtp(user, OtpType.Register);
    }
}
