import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColumnEntity } from '../../../entities/column.entity';
import { CreateColumnInput } from '../../inputs/create-column-input';
import { UpdateColumnInput } from '../../inputs/update-column-input';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(ColumnEntity)
    private readonly columnRepository: Repository<ColumnEntity>,
  ) {}

  async createColumn(columnInput: CreateColumnInput): Promise<ColumnEntity> {
    return await this.columnRepository.save(columnInput);
  }

  async getOneColumn(id: number): Promise<ColumnEntity> {
    return await this.columnRepository.findOne({ where: { id: id } });
  }

  async getAllColumns(): Promise<ColumnEntity[]> {
    return await this.columnRepository.find();
  }

  async deleteColumn(id: number): Promise<number> {
    await this.columnRepository.delete({ id: id });
    return id;
  }

  async updateColumn(
    updateColumnInput: UpdateColumnInput,
  ): Promise<ColumnEntity> {
    await this.columnRepository.update(updateColumnInput.id, {
      ...updateColumnInput,
    });
    return await this.columnRepository.findOne({
      where: { id: updateColumnInput.id },
    });
  }
}
