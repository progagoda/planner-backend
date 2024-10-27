import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateColumnInput } from '../../inputs/create-column-input';
import { UpdateColumnInput } from '../../inputs/update-column-input';
import { ColumnEntity } from '../../../entities/column.entity';
import { ColumnService } from '../../services/column/column.service';
import { CardService } from 'src/card/services/card/card.service';

@Resolver('Column')
export class ColumnResolver {
  constructor(
    private readonly columnService: ColumnService,
    private readonly cardService: CardService,
  ) {}

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
    const cards = await this.cardService.getCardsByColumnId(id);
    cards.forEach(
      async (card) =>
        await this.cardService.updateCard({ ...card, columnId: null }),
    );
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

  @Query(() => [ColumnEntity])
  async getColumnsByBoardId(
    @Args('boardId') boardId: string,
  ): Promise<ColumnEntity[]> {
    return await this.columnService.getColumnsByBoardId(boardId);
  }
}
