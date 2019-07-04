import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from '../models';
import { BaseDAO } from '../core/providers';

@Injectable()
export class PessoaDAOService extends BaseDAO<Pessoa, Repository<Pessoa>> {
  constructor(
    @InjectRepository(Pessoa)
    pessoaRepo: Repository<Pessoa>,
  ) {
    super(pessoaRepo);
  }
}
