import { IBase } from './base.interface';
import { ICpf } from './cpf.interface';
import { IUser } from './user.interface';

export interface IPessoa extends IBase {
  nascimento: Date;
  cpf: ICpf;
  usuario: IUser | null;
}
