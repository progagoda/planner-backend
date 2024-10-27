import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardEntity } from '../../../entities/card.entity';
import { CreateCardInput } from '../../inputs/create-card-input';
import { UpdateCardInput } from '../../inputs/update-card-input';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private readonly cardRepository: Repository<CardEntity>,
  ) {}

  async createCard(cardInput: CreateCardInput): Promise<CardEntity> {
    return await this.cardRepository.save({
      createdDate: Date.now().toString(),
      ...cardInput,
    });
  }

  async getCardById(id: number): Promise<CardEntity> {
    return await this.cardRepository.findOne({ where: { id: id } });
  }

  async getCardsByColumnId(columnId: number): Promise<CardEntity[]> {
    return await this.cardRepository.find({ where: { columnId } });
  }

  async getAllCards(): Promise<CardEntity[]> {
    return await this.cardRepository.find();
  }

  async deleteCard(id: number): Promise<number> {
    await this.cardRepository.delete(id);
    return id;
  }

  async updateCard(updateCardInput: UpdateCardInput): Promise<CardEntity> {
    await this.cardRepository.update(updateCardInput.id, {
      ...updateCardInput,
    });
    return await this.cardRepository.findOne({
      where: { id: updateCardInput.id },
    });
  }
}
