import { Repository, DeepPartial, BaseEntity } from 'typeorm';
import { IBase } from '../../interfaces';

export abstract class BaseDAO<T extends IBase, R extends Repository<T>> {

  constructor(protected readonly repository: R) { }

  findAll(select?: any[], relations?: any[]): Promise<T[]> {
    return this.repository.find({
      select,
      relations,
    });
  }

  async findOne(id: number, select?: any[], relations?: any[]): Promise<T> {
    const result = await this.repository.find({
      where: {
       id,
      },
      select,
      relations,
    });
    if (!result || result.length === 0) {
      throw new Error(`Data ${id} not found`);
    }
    return result[0];
  }

  async save(obj: DeepPartial<T>): Promise<T> {
    return this.repository.save(obj);
  }

  async delete(obj: T): Promise<void> {
    const result = await this.repository.findOne(obj.id);
    if (!result) {
      throw new Error(`Data ${obj.id} not found!`);
    }
    await this.repository.remove(obj);
  }

}
