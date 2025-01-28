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
    const maxPositionIndex = await this.columnRepository
      .createQueryBuilder('column')
      .select('MAX(column.positionIndex)', 'max')
      .getRawOne();

    return await this.columnRepository.save({
      ...columnInput,
      positionIndex: maxPositionIndex.max ? maxPositionIndex.max + 1 : 0,
    });
  }

  async getOneColumn(id: number): Promise<ColumnEntity> {
    return await this.columnRepository.findOne({ where: { id: id } });
  }

  async getColumnsByBoardId(boardId: string): Promise<ColumnEntity[]> {
    return await this.columnRepository.find({ where: { boardId } });
  }

  async getAllColumns(): Promise<ColumnEntity[]> {
    return await this.columnRepository.find();
  }

  async deleteColumn(id: number): Promise<number> {
    await this.columnRepository.delete({ id });
    return id;
  }

  async updateColumn(
    updateColumnInput: UpdateColumnInput,
  ): Promise<ColumnEntity> {
    const params = Object.entries(updateColumnInput).reduce<UpdateColumnInput>(
      (acc, [key, value]) => {
        if (typeof value !== 'undefined') {
          acc[key as keyof UpdateColumnInput] = value as never;
        }
        return acc;
      },
      {} as UpdateColumnInput,
    );
    await this.columnRepository.update(
      {
        id: Number(updateColumnInput.id),
      },
      {
        ...params,
      },
    );
    return await this.columnRepository.findOne({
      where: { id: Number(updateColumnInput.id) },
    });
  }
}
