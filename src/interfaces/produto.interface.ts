import { IBase } from './base.interface';

export enum ETipoProduto {
  REGULADOR,
  ROTOR,
  ROLAMENTO,
  POLIA,
  BOBINA,
}

export interface IProduto extends IBase {
  numeroPeca: number;
  altura: string;
  largura: string;
  comprimento: string;
  diametroExterno: string;
  diametroInterno: string;
  valor: number;
  amperagem: number;
  tipo: ETipoProduto;
  qtdSulcos: number;
  qtdPolos: number;
}
