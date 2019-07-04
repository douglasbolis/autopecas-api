import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IJwtPayload } from '../../interfaces';
import { ENVIRONMENTS } from '../../config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: ENVIRONMENTS.JWT_SECRET,
    });
  }

  async validate(payload: IJwtPayload) {
    try {
      const user = await this.authService.validateUser(payload);
      return user;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
