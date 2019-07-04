import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaDAOService } from './pessoa-dao.service';
import { Pessoa } from '../models';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  providers: [PessoaDAOService],
  exports: [PessoaDAOService],
})
export class PessoaModule {}
