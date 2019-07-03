import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@Entity()
export class Cpf {
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

  @OneToOne(() => Pessoa, pessoa => pessoa.cpf)
  pessoa: Pessoa;
}
