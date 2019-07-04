import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaDAOService } from './pessoa-dao.service';
import { CpfDAOService } from './cpf-dao.service';
import { Pessoa, Cpf } from '../models';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa, Cpf])],
  providers: [PessoaDAOService, CpfDAOService],
  exports: [PessoaDAOService, CpfDAOService],
})
export class PessoaModule {}
