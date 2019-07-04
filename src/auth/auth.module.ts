import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport';
import { UsersModule } from '../users';
import { ENVIRONMENTS } from '../config/environments';
import { AuthController } from './auth.controller';
import { PessoaModule } from '../pessoa';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: ENVIRONMENTS.JWT_SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UsersModule,
    PessoaModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, AuthService],
  controllers: [AuthController],
})
export class AuthModule { }
