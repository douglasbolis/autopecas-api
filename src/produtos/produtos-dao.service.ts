import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseDAO } from '../core/providers';
import { Produto } from '../models';

@Injectable()
export class ProdutosDaoService extends BaseDAO<Produto, Repository<Produto>> {

  constructor(
    @InjectRepository(Produto)
    usuarioRep: Repository<Produto>,
  ) {
    super(usuarioRep);
  }

}
