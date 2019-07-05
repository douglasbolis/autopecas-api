import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './produtos.controller';
import { ProdutosDaoService } from './produtos-dao.service';
import { Produto } from '../models';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [ProdutosDaoService],
  exports: [ProdutosDaoService],
})
export class ProdutosModule {}
