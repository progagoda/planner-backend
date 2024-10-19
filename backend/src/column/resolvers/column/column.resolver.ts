import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateColumnInput } from '../../inputs/create-column-input';
import { UpdateColumnInput } from '../../inputs/update-column-input';
import { ColumnEntity } from '../../../entities/column.entity';
import { ColumnService } from '../../services/column/column.service';

@Resolver('Column')
export class ColumnResolver {
  constructor(private readonly columnService: ColumnService) {}

  @Mutation(() => ColumnEntity)
  async createColumn(
    @Args('createColumnInput') createColumnInput: CreateColumnInput,
  ): Promise<ColumnEntity> {
    return await this.columnService.createColumn(createColumnInput);
  }
  @Mutation(() => ColumnEntity)
  async updateColumn(
    @Args('updateColumnInput') updateColumnInput: UpdateColumnInput,
  ): Promise<ColumnEntity> {
    return await this.columnService.updateColumn(updateColumnInput);
  }

  @Mutation(() => Number)
  async deleteColumn(@Args('id') id: number): Promise<number> {
    return await this.columnService.deleteColumn(id);
  }

  @Query(() => ColumnEntity)
  async getOneColumn(@Args('id') id: number): Promise<ColumnEntity> {
    return await this.columnService.getOneColumn(id);
  }

  @Query(() => [ColumnEntity])
  async getAllColumns(): Promise<ColumnEntity[]> {
    return await this.columnService.getAllColumns();
  }
}
