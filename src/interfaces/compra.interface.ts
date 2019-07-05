import { IBase } from './base.interface';
import { IItemCompra } from './item-compra.interface';

export interface ICompra extends IBase {
  valor: number;
  valorEntrega: number;
  produtos: IItemCompra[];
  gerarBoleto(): string;
  adicionarItem(idProduto: number): void;
  removerItem(idProduto: number): void;
  calcularFrete(clienteId: number): number;
  realizarPagamentoCartao(numeroCartao: string, validade: string, digitoVerificador: string): boolean;
}
