import { Usuario } from './../models/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersDAOService } from '../users';
import { IJwtPayload, ILoginPayload, ISingupPayload } from '../interfaces';
import { PessoaDAOService } from '../pessoa';

@Injectable()
export class AuthService {

  private saltRounds = 10;

  constructor(
    private readonly usersService: UsersDAOService,
    private readonly pessoaService: PessoaDAOService,
    private readonly jwtService: JwtService,
  ) { }

  async signIn(payload: ILoginPayload): Promise<string> {
    const user = await this.usersService.findByEmailWithPessoa(payload.email);
    const validPassowrd = await bcrypt.compare(payload.senha, user.senha);
    if (!validPassowrd) {
      throw new Error('Unauthorized');
    }
    const jwtPayload: IJwtPayload = {
      id: user.id,
      email: user.email,
      nome: user.pessoa.nome,
    };
    return this.jwtService.sign(jwtPayload);
  }

  async validateUser(payload: IJwtPayload): Promise<Usuario> {
    const user = await this.usersService.findOne(payload.id);
    return user;
  }

  async signup(payload: ISingupPayload): Promise<Usuario> {
    try {
      await this.usersService.findByEmailWithPessoa(payload.email);
    } catch (err) {

      const pessoa = await this.pessoaService.save({
        cpf: String(payload.cpf).replace(/\D/g, ''),
        nascimento: payload.nascimento,
        nome: payload.nome,
      });

      const usuario = await this.usersService.save({
        email: payload.email,
        senha: await bcrypt.hashSync(payload.senha, this.saltRounds),
        pessoa,
      });

      await this.pessoaService.save({
        ...pessoa,
        usuario,
      });

      return usuario;

    }
    throw new Error(`E-mail ${payload.email} already registered.`);
  }

}
