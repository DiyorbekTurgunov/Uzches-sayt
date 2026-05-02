import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { OtpCodeEntity } from '../entities/otp-codes.entity';
import { OtpType } from '../../../core/enums/otp-type.enum';

@Injectable()
export class OtpCodeService {
  async sendOtp(user: UserEntity, type: OtpType) {
    await this.deleteOtps(user.id);

    let otpCode = OtpCodeEntity.create({
      userId: user.id,
      code: this.generateOtp(),
      type: type,
      date: new Date(),
    });

    await OtpCodeEntity.save(otpCode);
    console.log(otpCode);
    // TODO: otpni haqiqiy send qilish shu yerda bo'ladi
  }

  async verifyOtp(userId: number, code: string) {
    let otpCode = await OtpCodeEntity.findOneBy({ userId });

    if (!otpCode || otpCode.code !== code) {
      throw new BadRequestException('Codes do not match');
    }

    let otpExpire = Number(process.env.OTP_EXPIRE) * 1000;
    let difference = Date.now() - otpCode.date.getTime();
    if (difference > otpExpire) {
      throw new BadRequestException('Code expired');
    }

    return true;
  }

  private generateOtp(): string {
    let num = Math.floor(Math.random() * 1_000_000).toString();
    return num.padStart(6, '0');
  }

  private async deleteOtps(userId: number) {
    let otpCodes = await OtpCodeEntity.findBy({ userId });
    await OtpCodeEntity.remove(otpCodes);
  }
}
