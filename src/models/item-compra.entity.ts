import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Entity } from 'typeorm';
import { IItemCompra } from '../interfaces';
import { Produto } from './produto.entity';

@Entity()
export class ItemCompra implements IItemCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  quantidade: number;

  @Column({
    type: 'int',
  })
  valor: number;

  @OneToOne(type => Produto, produto => produto.id, {
    eager: true, cascade: true, onDelete: 'CASCADE',
  })
  @JoinColumn()
  produto: Produto;
}
