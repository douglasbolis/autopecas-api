import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ItemCompra } from './item-compra.entity';
import { ICompra } from '../interfaces';

@Entity()
export class Compra implements ICompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  valor: number;
  @Column({
    type: 'int',
  })
  valorEntrega: number;

  @OneToMany(type => ItemCompra, item => item.id)
  @JoinColumn()
  produtos: ItemCompra[];

  gerarBoleto(): string {
    return '123123.65456123.2415646556.0000000.1234';
  }

  adicionarItem(idProduto: number): void {
    this.produtos = [
      ...(this.produtos || []),
      { id: idProduto } as any,
    ];
  }

  removerItem(idProduto: number): void {
    this.produtos.some((produto, index) => {
      if (produto.id === idProduto) {
        this.produtos.splice(index, 1);
        return true;
      }
      return false;
    });
  }

  calcularFrete(clienteId: number): number {
    return 30.00;
  }

  realizarPagamentoCartao(numeroCartao: string, validade: string, digitoVerificador: string): boolean {
    return true;
  }

}
