import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ICpf } from '../interfaces';
import { Pessoa } from './pessoa.entity';

@Entity()
export class Cpf implements ICpf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  one: number;

  @Column({
    type: 'int',
  })
  two: number;

  @Column({
    type: 'int',
  })
  tree: number;

  @Column({
    type: 'int',
  })
  digit: number;

  @OneToOne(() => Pessoa, pessoa => pessoa.cpf)
  pessoa: Pessoa;
}
