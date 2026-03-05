import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from "../../users/entities/user.entity";
import { OtpCodesEntity } from "../../otpCodes/entities/otp-Codes.entity";
import { OtpTypeEnum } from "../../../core/enums/otpType.enum";
import { ResendOtpDto } from '../dtos/resend-otp.dto';

@Injectable()
export class OtpCodeService {
  async sendOtp(user: UserEntity, type: OtpTypeEnum) {
    await this.deleteOtps(user.id);

    let otpCode = OtpCodesEntity.create({
      userId: user.id,
      code: this.generateOtp(),
      type: type,
    });

    await OtpCodesEntity.save(otpCode);
    console.log(otpCode);
    // TODO: otpni haqiqiy send qilish shu yerda bo'ladi
  }

  async verifyOtp(userId: number, code: string) {
    let otpCode = await OtpCodesEntity.findOneBy({ userId: userId });

    if (!otpCode || otpCode.code !== code) {
      throw new BadRequestException('Codes do not match');
    }

    let otpExpire = Number(process.env.OTP_EXPIRE) * 1000; // millisekundda
    let difference = Date.now() - Date.parse(otpCode.created);
    if (difference > otpExpire) {
      throw new BadRequestException('Code expired');
    }

    return true;
  }

  private generateOtp(): string {
    let otpCode = Math.floor(Math.random() * 1_000_000).toString(10);
    let code: any[] = [];
    for (let i = 0; i < 6 - otpCode.length; i++) {
      code.push(0);
    }

    code.push(otpCode);

    return code.join();
  }

  private async deleteOtps(userId: number) {
    let otpCodes = await OtpCodesEntity.findBy({ userId });
    await OtpCodesEntity.remove(otpCodes);
  }
}
