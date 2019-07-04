import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { IPessoa } from '../interfaces';
import { Cpf } from './cpf.entity';
import { Usuario } from './usuario.entity';

@Entity()
export class Pessoa implements IPessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'date',
  })
  nascimento: Date;

  @OneToOne(() => Cpf, cpf => cpf.pessoa.id)
  @JoinColumn()
  cpf: Cpf;

  @OneToOne(() => Usuario, usuario => usuario.id, { nullable: true })
  @JoinColumn()
  usuario: Usuario | null;
}
