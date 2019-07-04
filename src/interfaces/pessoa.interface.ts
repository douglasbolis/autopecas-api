import { IBase } from './base.interface';
import { IUser } from './user.interface';

export interface IPessoa extends IBase {
  nascimento: Date;
  cpf: string;
  nome: string;
  usuario: IUser | null;
}
