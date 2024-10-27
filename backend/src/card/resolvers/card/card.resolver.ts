import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCardInput } from '../../inputs/create-card-input';
import { UpdateCardInput } from '../../inputs/update-card-input';
import { CardService } from '../../services/card/card.service';
import { CardEntity } from '../../../entities/card.entity';
import { ColumnService } from 'src/column/services/column/column.service';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver()
export class CardResolver {
  constructor(
    private readonly cardService: CardService,
    private readonly columnService: ColumnService,
  ) {}

  @Mutation(() => CardEntity)
  async createCard(
    @Args('createCardInput') createCardInput: CreateCardInput,
  ): Promise<CardEntity | { message: string }> {
    const isValidId = await this.columnService.getOneColumn(
      Number(createCardInput.columnId),
    );

    if (!isValidId) {
      throw new HttpException('Invalid column id', HttpStatus.BAD_REQUEST);
    }

    return await this.cardService.createCard(createCardInput);
  }
  @Mutation(() => CardEntity)
  async updateCard(
    @Args('updateCardInput') updateCardInput: UpdateCardInput,
  ): Promise<CardEntity> {
    return await this.cardService.updateCard(updateCardInput);
  }

  @Mutation(() => Number)
  async deleteCard(@Args('id') id: number): Promise<number> {
    return await this.cardService.deleteCard(id);
  }

  @Query(() => CardEntity)
  async getCardById(@Args('id') id: number): Promise<CardEntity> {
    return await this.cardService.getCardById(id);
  }

  @Query(() => [CardEntity])
  async getAllCards(): Promise<CardEntity[]> {
    return await this.cardService.getAllCards();
  }

  @Query(() => [CardEntity])
  async getCardsByColumnId(
    @Args('columnId') columnId: number,
  ): Promise<CardEntity[]> {
    return await this.cardService.getCardsByColumnId(columnId);
  }
}
