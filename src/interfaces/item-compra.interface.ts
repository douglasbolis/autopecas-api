import { IBase } from './base.interface';
import { IProduto } from './produto.interface';

export interface IItemCompra extends IBase {
  produto: IProduto;
  quantidade: number;
  valor: number;
}
