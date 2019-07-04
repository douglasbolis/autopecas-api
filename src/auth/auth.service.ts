import { Usuario } from './../models/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersDAOService } from '../users';
import { IJwtPayload, ILoginPayload } from '../interfaces';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersDAOService,
    private readonly jwtService: JwtService,
  ) { }

  async signIn(payload: ILoginPayload): Promise<string> {
    const user = await this.usersService.findByEmail(payload.email);
    const validPassowrd = await bcrypt.compare(payload.senha, user.senha);
    if (!validPassowrd) {
      throw new Error('Unauthorized');
    }
    return this.jwtService.sign(user);
  }

  async validateUser(payload: IJwtPayload): Promise<Usuario> {
    const user = await this.usersService.findOne(payload.id);
    return user;
  }

}
