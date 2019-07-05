import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Produto } from '../models';
import { ProdutosDaoService } from './produtos-dao.service';

@Controller('produtos')
@UseGuards(AuthGuard('jwt'))
export class ProdutosController {

  constructor(
    private readonly produtosDaoService: ProdutosDaoService,
  ) { }

  @Get()
  async all(): Promise<Produto[]> {
    const result = await this.produtosDaoService.findAll();
    return result;
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Produto> {
    try {
      const result = await this.produtosDaoService.findOne(Number(id));
      return result;
    } catch (err) {
      throw new BadRequestException('Product id not found.');
    }
  }

  @Post()
  async create(@Body() body: any): Promise<Produto> {
    const produto = new Produto();
    return await this.produtosDaoService.save(this.pickProdutoMerge(produto, body));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any): Promise<Produto> {
    try {
      const produto = await this.produtosDaoService.findOne(Number(id));
      return await this.produtosDaoService.save(this.pickProdutoMerge(produto, body));
    } catch (err) {
      throw new BadRequestException('Product id not found.');
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    try {
      const product = await this.produtosDaoService.findOne(Number(id));
      await this.produtosDaoService.delete(product);
    } catch (err) {
      throw new BadRequestException('Product id not found.');
    }
  }

  private pickProdutoMerge(a: Produto, b: any): Produto {
    a.numeroPeca = b.numeroPeca;
    a.altura = b.altura;
    a.largura = b.largura;
    a.comprimento = b.comprimento;
    a.diametroExterno = b.diametroExterno;
    a.diametroInterno = b.diametroInterno;
    a.valor = b.valor;
    a.amperagem = b.amperagem;
    a.tipo = b.tipo;
    a.qtdSulcos = b.qtdSulcos;
    a.qtdPolos = b.qtdPolos;
    return a;
  }

}
