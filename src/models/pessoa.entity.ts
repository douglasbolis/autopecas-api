import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { IPessoa } from '../interfaces';
import { Usuario } from './usuario.entity';

@Entity()
export class Pessoa implements IPessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'date',
  })
  nascimento: Date;

  @Column({
    type: 'varchar',
  })
  cpf: string;

  @Column({
    type: 'varchar',
  })
  nome: string;

  @OneToOne(() => Usuario, usuario => usuario.id, { nullable: true })
  @JoinColumn()
  usuario: Usuario | null;
}
