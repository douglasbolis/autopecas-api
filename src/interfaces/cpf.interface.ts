import { IBase } from './base.interface';
import { IPessoa } from './pessoa.interface';

export interface ICpf extends IBase {
  one: number;
  two: number;
  tree: number;
  digit: number;
  pessoa?: IPessoa;
}
