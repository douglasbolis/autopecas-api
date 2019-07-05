import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IProduto, ETipoProduto } from '../interfaces';

@Entity()
export class Produto implements IProduto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  numeroPeca: number;

  @Column({
    type: 'varchar',
  })
  altura: string;

  @Column({
    type: 'varchar',
  })
  largura: string;

  @Column({
    type: 'varchar',
  })
  comprimento: string;

  @Column({
    type: 'varchar',
  })
  diametroExterno: string;

  @Column({
    type: 'varchar',
  })
  diametroInterno: string;

  @Column({
    type: 'int',
  })
  valor: number;

  @Column({
    type: 'int',
  })
  amperagem: number;

  @Column({
    type: 'enum',
    enum: [
      ETipoProduto.BOBINA,
      ETipoProduto.POLIA,
      ETipoProduto.REGULADOR,
      ETipoProduto.ROLAMENTO,
      ETipoProduto.ROTOR,
    ],
  })
  tipo: ETipoProduto;

  @Column({
    type: 'int',
    nullable: true,
  })
  qtdSulcos: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  qtdPolos: number;
}
