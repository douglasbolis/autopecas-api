import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cpf } from '../models';
import { BaseDAO } from '../core/providers';

@Injectable()
export class CpfDAOService extends BaseDAO<Cpf, Repository<Cpf>> {
  constructor(
    @InjectRepository(Cpf)
    cpfRepo: Repository<Cpf>,
  ) {
    super(cpfRepo);
  }
}
