import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../models';
import { BaseDAO } from '../core/providers';

@Injectable()
export class UsersDAOService extends BaseDAO<Usuario, Repository<Usuario>> {
  constructor(
    @InjectRepository(Usuario)
    usuarioRep: Repository<Usuario>,
  ) {
    super(usuarioRep);
  }

  async findByEmailWithPessoa(email: string, select?: any[]): Promise<Usuario> {
    const result = await this.repository.findOne({
      relations: ['pessoa'],
      where: {
        email,
      },
      select,
    });
    if (!result) {
      throw new Error(`Email ${email} not found.`);
    }
    return result;
  }
}
