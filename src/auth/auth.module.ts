import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"

import { UsersModule } from "../users/users.module"
import { AuthService } from './auth.service';
import getSecretKey from "../config/authConfig"

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: getSecretKey(),
      signOptions: { expiresIn: "1d" }
    })
  ],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
