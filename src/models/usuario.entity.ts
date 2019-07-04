import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { IUser } from '../interfaces';
import { Pessoa } from './pessoa.entity';

@Entity()
export class Usuario implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  senha: string;

  @OneToOne(() => Pessoa, pessoa => pessoa.id)
  @JoinColumn()
  pessoa: Pessoa;
}
