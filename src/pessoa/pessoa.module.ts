import { Module } from '@nestjs/common';
import { PessoaDAOService } from './pessoa-dao.service';

@Module({
  providers: [PessoaDAOService],
  exports: [PessoaDAOService],
})
export class PessoaModule {}
