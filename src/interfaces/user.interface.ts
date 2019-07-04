import { IBase } from './base.interface';
import { IPessoa } from './pessoa.interface';

export interface IUser extends IBase {
  email: string;
  senha?: string;
  pessoa: IPessoa;
}
