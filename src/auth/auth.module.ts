import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport';
import { UsersModule } from '../users';
import { ENVIRONMENTS } from '../config/environments';
import { AuthController } from './auth.controller';

const passportModuleDynamic = PassportModule.register({
  defaultStrategy: 'jwt',
  session: false,
});

@Module({
  imports: [
    passportModuleDynamic,
    JwtModule.register({
      secretOrPrivateKey: ENVIRONMENTS.JWT_SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [passportModuleDynamic, AuthService],
  controllers: [AuthController],
})
export class AuthModule { }
